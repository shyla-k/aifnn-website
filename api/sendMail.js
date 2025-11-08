// api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ Allow CORS (Desktop + Mobile + Safari)
  res.setHeader("Access-Control-Allow-Origin", "https://www.aifnn.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request for mobile Safari / browsers
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ Setup transporter (e.g., Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "yahoo"
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Send mail
    await transporter.sendMail({
      from: `"AIFNN Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully");
    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
}
