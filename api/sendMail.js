// /api/sendMail.js
import nodemailer from "nodemailer";

let transporter; // 🔁 Cached transporter for re-use (avoids reconnect delays)

export default async function handler(req, res) {
  // --- CORS Support ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // --- ✅ Initialize Transporter (reused for faster performance) ---
    if (!transporter) {
      console.log("🟢 Creating new Yahoo SMTP transporter...");
      transporter = nodemailer.createTransport({
        host: "smtp.mail.yahoo.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER, // your Yahoo email (mk_shyla@yahoo.com)
          pass: process.env.SMTP_PASS, // Yahoo App Password (not regular password)
        },
        pool: true, // ✅ Keeps the connection alive between sends
        maxConnections: 3,
        maxMessages: 20,
      });

      // Verify only once on initialization
      transporter.verify()
        .then(() => console.log("✅ Yahoo SMTP verified successfully"))
        .catch(err => console.error("⚠️ SMTP verification failed:", err.message));
    }

    // --- ✅ Respond to frontend immediately ---
    res.status(200).json({
      success: true,
      message: "Message received — sending email in background...",
    });

    // --- 📨 Prepare Email ---
    const mailOptions = {
      from: `"AifNN Contact" <${process.env.SMTP_USER}>`,
      to: "shyla.mk@aifnn.com",  // ✅ Primary recipient
      cc: "mk_shyla@yahoo.com",  // ✅ CC recipient
      subject: `📩 New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #222;">
          <h2 style="color:#0045ff;">New Contact Message from AifNN Website</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p style="white-space:pre-line;">${message}</p>
          <hr/>
          <p style="font-size:0.9em;color:#777;">This message was sent via www.aifnn.com</p>
        </div>
      `,
    };

    // --- ⚙️ Send Mail in Background (non-blocking) ---
    transporter.sendMail(mailOptions)
      .then(() => console.log("✅ Email sent successfully to shyla.mk@aifnn.com (CC: mk_shyla@yahoo.com)"))
      .catch(err => console.error("❌ Failed to send email:", err.message));

  } catch (error) {
    console.error("❌ Handler Error:", error);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
}
