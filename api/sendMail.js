// api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Allow cross-origin requests
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

    // ✅ Yahoo SMTP configuration
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

    // ✅ Brand email design
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f7fa; padding: 30px;">
        <table style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <tr style="background: linear-gradient(90deg, #052042, #001229);">
            <td style="padding: 20px; text-align: center;">
              <img src="https://www.aifnn.com/assets/AifNN_darkbluebackground1.png" alt="AifNN Logo" style="height: 60px; display: block; margin: 0 auto;" />
              <h2 style="color: #ffffff; margin: 10px 0 0;">New Contact Message</h2>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <p style="font-size: 16px; color: #333;">You’ve received a new message from the AifNN contact form:</p>

              <table style="width: 100%; margin-top: 20px;">
                <tr><td style="color: #555; font-weight: bold;">Name:</td><td>${name}</td></tr>
                <tr><td style="color: #555; font-weight: bold;">Email:</td><td>${email}</td></tr>
                <tr><td style="color: #555; font-weight: bold;">Message:</td><td>${message}</td></tr>
              </table>

              <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

              <p style="font-size: 14px; color: #777;">This message was sent automatically from the <a href="https://www.aifnn.com" style="color: #0045ff; text-decoration: none;">AifNN.com</a> website.</p>
            </td>
          </tr>
        </table>
      </div>
    `;

    // ✅ Send styled email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "Shyla.MK@aifnn.com",
      bcc: "mk_shyla@yahoo.com",
      replyTo: email,
      subject: `📩 New Contact Message from ${name}`,
      html: htmlContent,
    });

    console.log("✅ Branded email sent successfully");
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
