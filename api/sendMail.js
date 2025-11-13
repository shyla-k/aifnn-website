// api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Enable CORS
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

    // ✅ Yahoo SMTP setup
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    // ✅ Inline-styled, Yahoo-safe HTML email
    const htmlContent = `
      <div style="background-color:#f4f7fb;padding:20px;font-family:'Segoe UI',Arial,sans-serif;">
        <table style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <tr>
            <td style="background:linear-gradient(90deg,#052042,#001229);text-align:center;padding:25px 15px;">
              <img src="https://www.aifnn.com/assets/AifNN_darkbluebackground1.png" alt="AifNN Logo" style="height:70px;margin-bottom:10px;">
              <h2 style="color:#ffffff;margin:0;font-size:22px;">New Message from AifNN</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:25px;color:#333;">
              <p style="font-size:16px;">You’ve received a new message from your website contact form:</p>

              <table style="width:100%;margin-top:20px;border-collapse:collapse;">
                <tr><td style="font-weight:bold;padding:5px 0;width:80px;">Name:</td><td>${name}</td></tr>
                <tr><td style="font-weight:bold;padding:5px 0;">Email:</td><td>${email}</td></tr>
                <tr><td style="font-weight:bold;padding:5px 0;vertical-align:top;">Message:</td><td>${message}</td></tr>
              </table>

              <hr style="margin:25px 0;border:none;border-top:1px solid #eee;" />

              <p style="font-size:13px;color:#777;">
                Sent automatically from <a href="https://www.aifnn.com" style="color:#0045ff;text-decoration:none;">AifNN.com</a>
              </p>
            </td>
          </tr>
        </table>
      </div>
    `;

    // ✅ Send the branded HTML email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "Shyla.MK@aifnn.com",
      bcc: "mk_shyla@yahoo.com",
      replyTo: email,
      subject: `📩 New Contact Message from ${name}`,
      html: htmlContent,
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });

    console.log("✅ Branded AifNN email sent successfully");
    return res.status(200).json({
      success: true,
      message: "✅ Email sent successfully!",
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
