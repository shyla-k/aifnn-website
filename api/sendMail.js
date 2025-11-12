// api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
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

    // Configure transporter (Yahoo example)
   await transporter.sendMail({
  from: `"${name}" <${process.env.SMTP_USER}>`,
  to: "Shyla.MK@aifnn.com",
  bcc: "mk_shyla@yahoo.com",
  replyTo: email,
  subject: `📩 New Contact Form Message from ${name}`,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
      <hr />
      <p style="font-size: 12px; color: gray;">
        Sent automatically from <a href="https://www.aifnn.com">AifNN.com</a>.
      </p>
    </div>
  `,
});



    // Verify transporter before sending
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"AIFNN Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("✅ Email sent successfully");
    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
      error: error.message,
    });
  }
}
