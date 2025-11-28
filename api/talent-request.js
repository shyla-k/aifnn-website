export const config = {
  api: { bodyParser: false }, // allow multer
};

import fs from "fs";
import multer from "multer";
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

// ---------- Multer Setup ----------
const uploadDir = "/tmp/uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const clean = file.originalname.replace(/\s+/g, "_");
    cb(null, `${unique}-${clean}`);
  },
});

const upload = multer({ storage });

// Convert multer to promise
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => (result instanceof Error ? reject(result) : resolve(result)));
  });
}

// ---------- MongoDB ----------
let cachedClient = null;

async function getMongo() {
  if (cachedClient) return cachedClient;

  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri, {
    tls: true,
    tlsAllowInvalidCertificates: false,
    retryWrites: true,
    w: "majority",
    serverSelectionTimeoutMS: 5000,
  });

  await client.connect();
  console.log("MONGO CONNECTED OK");

  cachedClient = client;
  return client;
}


// ---------- API HANDLER ----------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    // Parse form-data using multer
    await runMiddleware(req, res, upload.single("file"));
  } catch (err) {
    console.error("File upload error", err);
    return res.status(500).json({ ok: false, error: "Upload failed" });
  }

  const { name, email, roles, experience = "N/A", brief = "", source = "Website" } = req.body;

  if (!name || !email || !roles) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  const file = req.file;
  const filePath = file ? file.path : null;

  // ---------- EMAIL ----------
  const smtp = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const attachments = [
    {
      filename: "submission.txt",
      content: `Name: ${name}
Email: ${email}
Roles: ${roles}
Experience: ${experience}
Source: ${source}
Brief:
${brief}`,
    },
  ];

  if (file) {
    attachments.unshift({ filename: file.originalname, path: file.path });
  }

  try {
    await smtp.sendMail({
      from: `AIFNN Notifications <${process.env.SMTP_USER}>`,
      to: "Shyla.MK@aifnn.com",
      cc: "mk_shyla@yahoo.com",
      replyTo: `${name} <${email}>`,
      subject: `Talent/Training Request from ${name}`,
      html: `
        <h2>AIFNN New Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Roles:</b> ${roles}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Brief:</b><br>${brief}</p>
      `,
      attachments,
    });
  } catch (emailErr) {
    console.error("Email send error:", emailErr);
    return res.status(500).json({ ok: false, error: "Email failed" });
  }

  // ---------- SAVE TO MONGO ----------
  try {
    const client = await getMongo();
    const db = client.db(process.env.MONGODB_DB);

    const result = await db.collection("submissions").insertOne({
      name,
      email,
      roles,
      experience,
      brief,
      source,
      filePath,
      createdAt: new Date(),
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    });

    return res.status(200).json({ ok: true, id: result.insertedId });
  } catch (dbErr) {
    console.error("MongoDB save error:", dbErr);
    return res.status(500).json({ ok: false, error: "Database save failed" });
  }
}
