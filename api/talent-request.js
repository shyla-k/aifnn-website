// FILE: /api/talent-request.js
export const config = { api: { bodyParser: false } };

import fs from "fs";
import multer from "multer";
import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";
import { put } from "@vercel/blob";

// ----------------------------------------------------
// TEMP DIRECTORY FOR UPLOAD
// ----------------------------------------------------
const uploadDir = "/tmp/uploads";
if (!fs.existsSync(uploadDir))
  fs.mkdirSync(uploadDir, { recursive: true });

// ----------------------------------------------------
// MULTER SETUP
// ----------------------------------------------------
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
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (req, file, cb) => {
    const allowed = ["pdf", "doc", "docx", "png", "jpg", "jpeg"];
    const ext = file.originalname.split(".").pop().toLowerCase();
    if (!allowed.includes(ext)) cb(new Error("Invalid file type"));
    else cb(null, true);
  },
});

// ----------------------------------------------------
// Utility function to wrap multer
// ----------------------------------------------------
const runMiddleware = (req, res, fn) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result) =>
      result instanceof Error ? reject(result) : resolve(result)
    );
  });

// ----------------------------------------------------
// MongoDB Cached Connection
// ----------------------------------------------------
let cachedClient = null;
async function getMongo() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

// ----------------------------------------------------
// MAIN API HANDLER
// ----------------------------------------------------
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ ok: false, error: "Method not allowed" });

  console.log("➡️ /api/talent-request POST received");

  const contentType = req.headers["content-type"] || "";
  let fields = {};
  let file = null;

  // ----------------------------------------------
  // 1️⃣ PARSE MULTIPART (WITH FILE)
  // ----------------------------------------------
  if (contentType.startsWith("multipart/form-data")) {
    try {
      await runMiddleware(req, res, upload.single("file"));
      file = req.file;
      fields = req.body;
    } catch (err) {
      console.error("❌ Multer error:", err);
      return res.status(400).json({ ok: false, error: "Invalid multipart data" });
    }
  }

  // ----------------------------------------------
  // 2️⃣ PARSE JSON (NO FILE UPLOADED)
  // ----------------------------------------------
  if (!contentType.startsWith("multipart/form-data")) {
    let raw = "";
    await new Promise((resolve) => {
      req.on("data", (chunk) => (raw += chunk));
      req.on("end", resolve);
    });

    try {
      fields = JSON.parse(raw);
    } catch (err) {
      console.error("❌ JSON parse error:", err);
      return res.status(400).json({ ok: false, error: "Invalid JSON" });
    }
  }

  // ----------------------------------------------
  // 3️⃣ GET reCAPTCHA TOKEN (THIS FIXES YOUR ERROR)
  // ----------------------------------------------
  const recaptchaToken =
    req.headers["x-recaptcha-token"] ||
    req.headers["x-recaptcha-token-0"] ||
    req.headers["x-recaptcha-token-1"] ||
    req.headers["x-recaptcha-token-2"] ||
    fields.recaptchaToken ||
    null;

  console.log("🚀 FINAL TOKEN RECEIVED:", recaptchaToken);

  if (!recaptchaToken) {
    console.log("❌ Missing reCAPTCHA token");
    return res.status(400).json({ ok: false, error: "Missing reCAPTCHA token" });
  }

  // ----------------------------------------------
  // 4️⃣ VERIFY reCAPTCHA WITH GOOGLE
  // ----------------------------------------------
  try {
    const params = new URLSearchParams();
    params.append("secret", process.env.RECAPTCHA_SECRET_KEY);
    params.append("response", recaptchaToken);

    const verify = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      { method: "POST", body: params }
    );

    const result = await verify.json();
    console.log("✔ reCAPTCHA verification:", result);

    if (!result.success) {
      return res.status(400).json({ ok: false, error: "reCAPTCHA failed", details: result });
    }
  } catch (err) {
    console.error("❌ reCAPTCHA validation error:", err);
    return res.status(500).json({ ok: false, error: "reCAPTCHA validation error" });
  }

  // ----------------------------------------------
  // Extract fields
  // ----------------------------------------------
  const {
    name,
    email,
    roles,
    experience = "N/A",
    brief = "",
    source = "Talent Form",
  } = fields;

  if (!name || !email || !roles) {
    return res.status(400).json({
      ok: false,
      error: "Missing required fields (name, email, roles)",
    });
  }

  // ----------------------------------------------
  // 5️⃣ UPLOAD FILE TO VERCEL BLOB (IF EXISTS)
  // ----------------------------------------------
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
      console.error("❌ Blob upload error:", err);
      return res.status(500).json({ ok: false, error: "File upload failed" });
    }
  }

  // ----------------------------------------------
  // 6️⃣ SEND EMAIL TO SHYLA
  // ----------------------------------------------
  try {
    const smtp = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
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

    console.log("📨 Email sent successfully");
  } catch (err) {
    console.error("❌ Email error:", err);
    return res.status(500).json({ ok: false, error: "Email sending failed" });
  }

  // ----------------------------------------------
  // 7️⃣ SAVE TO MONGODB
  // ----------------------------------------------
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
    console.error("❌ MongoDB error:", err);
    return res.status(500).json({ ok: false, error: "Database failed" });
  }

  // ----------------------------------------------
  // 8️⃣ SUCCESS RESPONSE
  // ----------------------------------------------
  return res.json({ ok: true, message: "Talent request submitted successfully" });
}
