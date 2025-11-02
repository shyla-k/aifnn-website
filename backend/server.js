import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Create reusable transporter (Yahoo SMTP)
const transporter = nodemailer.createTransport({
  service: "Yahoo",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// POST /send route
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields required" });
  }

  // ✅ Respond immediately for fast UX
  res.json({ success: true });

  // ⏳ Continue sending email in background
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER, // you can change this to your business email
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email send failed:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
