// FILE: /api/talent-request.js
export const config = { api: { bodyParser: false } };

import fs from "fs";
import multer from "multer";
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import { put } from "@vercel/blob";

// ------------------------------------------
// 0. Create temp upload folder (/tmp is OK in Vercel)
// ------------------------------------------
const uploadDir = "/tmp/uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// ------------------------------------------
// 1. MULTER CONFIG (file uploads)
// ------------------------------------------
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const clean = file.originalname.replace(/\s+/g, "_");
    cb(null, `${unique}-${clean}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ["pdf", "doc", "docx", "png", "jpg", "jpeg"];
    const ext = file.originalname.split(".").pop().toLowerCase();
    if (!allowed.includes(ext)) return cb(new Error("Invalid file type"));
    cb(null, true);
  },
});

// convert middleware to promise
const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });

// ------------------------------------------
// 2. MongoDB cache
// ------------------------------------------
let cachedClient = null;
async function getMongo() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

// ------------------------------------------
// MAIN HANDLER
// ------------------------------------------
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });

  console.log("➡️ Incoming POST /api/talent-request");

  const contentType = req.headers["content-type"] || "";
  const recaptchaToken =
    req.headers["x-recaptcha-token"] ||
    req.body?.recaptchaToken ||
    null;

  if (!recaptchaToken) {
    console.log("ERROR: Missing reCAPTCHA token!");
    return res.status(400).json({ ok: false, error: "Missing reCAPTCHA token" });
  }

  let file = null;
  let fields = {};

  // ---------------------------------------------------------
  // CASE 1: Multipart (file upload)
  // ---------------------------------------------------------
  if (contentType.startsWith("multipart/form-data")) {
    try {
      await runMiddleware(req, res, upload.single("file"));
      file = req.file;

      fields = req.body; // Multer puts fields here
      fields.recaptchaToken = recaptchaToken;
    } catch (err) {
      console.error("❌ Multer Error:", err);
      return res.status(400).json({ ok: false, error: "Invalid multipart data" });
    }
  }

  // ---------------------------------------------------------
  // CASE 2: JSON
  // ---------------------------------------------------------
  if (!contentType.startsWith("multipart/form-data")) {
    let raw = "";
    await new Promise((resolve) => {
      req.on("data", (chunk) => (raw += chunk));
      req.on("end", resolve);
    });

    try {
      fields = JSON.parse(raw);
    } catch (err) {
      return res.status(400).json({ ok: false, error: "Invalid JSON" });
    }

    fields.recaptchaToken = recaptchaToken;
  }

  // Extract fields
  const {
    name,
    email,
    roles,
    experience = "N/A",
    brief = "",
    source = "Talent Form",
  } = fields;

  if (!name || !email || !roles) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing required fields (name/email/roles)" });
  }

  // --------------------------------------------
  // 3. Verify reCAPTCHA (VERY IMPORTANT)
  // --------------------------------------------
  try {
    const params = new URLSearchParams();
    params.append("secret", process.env.RECAPTCHA_SECRET_KEY);
    params.append("response", recaptchaToken);

    const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: params,
    });

    const result = await verify.json();
    console.log("reCAPTCHA result:", result);

    if (!result.success) {
      return res.status(400).json({
        ok: false,
        error: "reCAPTCHA failed",
        details: result,
      });
    }
  } catch (err) {
    console.error("❌ reCAPTCHA Error:", err);
    return res
      .status(500)
      .json({ ok: false, error: "reCAPTCHA validation error" });
  }

  // --------------------------------------------
  // 4. Upload optional file to Vercel Blob
  // --------------------------------------------
  let blobUrl = null;

  if (file) {
    try {
      const buffer = fs.readFileSync(file.path);

      const uploaded = await put(`uploads/${file.filename}`, buffer, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });

      blobUrl = uploaded.url;

      fs.unlinkSync(file.path);
    } catch (err) {
      console.error("❌ Blob Upload Error:", err);
      return res.status(500).json({ ok: false, error: "File upload failed" });
    }
  }

  // --------------------------------------------
  // 5. Send Email
  // --------------------------------------------
  try {
    const smtp = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await smtp.sendMail({
      from: "info@aifnn.com",
      to: "Shyla.MK@aifnn.com",
      bcc: "mk_shyla@yahoo.com",
      replyTo: `${name} <${email}>`,
      subject: `AIFNN Talent Request — ${name} (${roles})`,
      html: `
        <h3>New Talent Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Role(s):</b> ${roles}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Source:</b> ${source}</p>
        <p><b>Brief:</b> ${brief}</p>
        ${blobUrl ? `<p><b>Attachment:</b> <a href="${blobUrl}">Download File</a></p>` : ""}
      `,
    });
  } catch (err) {
    console.error("❌ Email Error:", err);
    return res.status(500).json({ ok: false, error: "Email sending failed" });
  }

  // --------------------------------------------
  // 6. Save to MongoDB
  // --------------------------------------------
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
    console.error("❌ MongoDB Error:", err);
    return res.status(500).json({ ok: false, error: "Database failed" });
  }

  return res.json({ ok: true, message: "Talent request submitted successfully" });
}
