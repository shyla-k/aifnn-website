export const config = { api: { bodyParser: false } };

import fs from "fs";
import multer from "multer";
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import fetch from "node-fetch";
import { put } from "@vercel/blob";

// ---------- Multer setup ----------
const uploadDir = "/tmp/uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.random().toString(36).slice(2, 8);
    cb(null, unique + "-" + file.originalname.replace(/\s+/g, "_"));
  },
});
const upload = multer({ storage });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });
}

// ---------- MongoDB ----------
let cachedClient = null;
async function getMongo() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

// ---------- Handler ----------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  // 1) reCAPTCHA validation
  try {
    const token = req.headers["x-recaptcha-token"];
    if (!token) {
      return res.status(400).json({ ok: false, error: "Missing reCAPTCHA token" });
    }

    const verify = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
      { method: "POST" }
    );
    const recaptcha = await verify.json();

    if (!recaptcha.success || recaptcha.score < 0.5) {
      return res.status(400).json({ ok: false, error: "reCAPTCHA failed" });
    }
  } catch (err) {
    return res.status(500).json({ ok: false, error: "reCAPTCHA error" });
  }

  // 2) Process file using multer
  try {
    await runMiddleware(req, res, upload.single("file"));
  } catch (err) {
    return res.status(500).json({ ok: false, error: "File upload error" });
  }

  const { name, email, roles, experience = "N/A", brief = "", source = "Website" } = req.body;
  const file = req.file;

  let blobUrl = null;

  // 3) Upload to Vercel Blob
  if (file) {
    try {
      const fileBuffer = fs.readFileSync(file.path);
      const uploaded = await put(`uploads/${file.filename}`, fileBuffer, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      blobUrl = uploaded.url;

      fs.unlinkSync(file.path);
    } catch (err) {
      return res.status(500).json({ ok: false, error: "Blob upload failed" });
    }
  }

  // 4) Send email with logo
  const logoUrl = "https://www.aifnn.com/AifNN_darkbluebackground1.png";
  const emailHtml = `
    <div style="font-family:Arial;background:#f4f6f9;padding:20px;">
      <div style="margin:auto;max-width:600px;background:white;padding:25px;border-radius:10px;border:1px solid #e1e5ea;">
        <div style="text-align:center;">
          <img src="${logoUrl}" style="height:60px;margin-bottom:20px;object-fit:contain;" />
        </div>

        <h2 style="color:#0D1B4C;">AIFNN — New Submission</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Role:</b> ${roles}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Attachment:</b> ${blobUrl ? `<a href="${blobUrl}">Download</a>` : "No file"}</p>

        <h3 style="color:#0D1B4C;margin-top:20px;">Brief</h3>
        <p style="background:#f8f9fb;padding:10px;border-radius:8px;white-space:pre-line;">${brief}</p>
      </div>
    </div>
  `;

  try {
    const smtp = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await smtp.sendMail({
      from: "info@aifnn.com",
      to: "Shyla.MK@aifnn.com",
      bcc: "mk_shyla@yahoo.com",
      replyTo: `${name} <${email}>`,
      subject: `AIFNN New Submission – ${name}`,
      html: emailHtml,
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "Email send failed" });
  }

  // 5) Save to MongoDB
  try {
    const client = await getMongo();
    const db = client.db(process.env.MONGODB_DB);

    await db.collection("submissions").insertOne({
      name,
      email,
      roles,
      experience,
      brief,
      source,
      blobUrl,
      createdAt: new Date(),
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "Database save failed" });
  }

  res.status(200).json({ ok: true, message: "Submitted successfully" });
}
