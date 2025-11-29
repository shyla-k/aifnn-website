// api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // ✅ Use ONLY ENVIRONMENT VARIABLES (no secrets in code)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,     // smtp-relay.brevo.com
      port: Number(process.env.SMTP_PORT), // 587
      secure: false,
      auth: {
        user: process.env.SMTP_USER,  // 9c7776001@smtp-brevo.com
        pass: process.env.SMTP_PASS,  // xsmtp...
      },
    });

    await transporter.verify();

    const htmlContent = `
      <div style="background-color:#f4f7fb;padding:30px 0;font-family:'Segoe UI',Arial,sans-serif;">
        <table style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="background:linear-gradient(90deg,#052042,#001229);text-align:center;padding:25px 15px;">
              <img src="https://www.aifnn.com/assets/AifNN_darkbluebackground1.png"
                  alt="AifNN Logo"
                  width="120"
                  height="120"
                  style="display:block;margin:0 auto;border-radius:8px;">
              <h2 style="color:#ffffff;margin:15px 0 0;font-size:22px;font-weight:600;">
                AifNN Contact Form Message
              </h2>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;color:#333;">
              <p style="font-size:16px;line-height:1.6;margin:0 0 10px;">
                You’ve received a new message from your website contact form:
              </p>

              <table style="width:100%;margin-top:20px;border-collapse:collapse;">
                <tr><td style="font-weight:bold;padding:5px 0;width:80px;">Name:</td><td>${name}</td></tr>
                <tr><td style="font-weight:bold;padding:5px 0;">Email:</td><td>${email}</td></tr>
                <tr><td style="font-weight:bold;padding:5px 0;vertical-align:top;">Message:</td><td>${message}</td></tr>
              </table>

              <hr style="margin:30px 0;border:none;border-top:1px solid #eee;" />

              <p style="font-size:13px;color:#777;text-align:center;">
                Sent automatically from 
                <a href="https://www.aifnn.com" style="color:#0045ff;text-decoration:none;">AifNN.com</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#001229;padding:15px;text-align:center;color:#aaa;font-size:12px;">
              © ${new Date().getFullYear()} AifNN Technologies — AI | ML | Automation
            </td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `AIFNN Notifications <${process.env.SENDER_EMAIL}>`,
      to: "Shyla.MK@aifnn.com",
      bcc: "mk_shyla@yahoo.com",
      replyTo: email,
      subject: `📩 New Contact Message from ${name}`,
      html: htmlContent,
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });

  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email.",
      error: error.message,
    });
  }
}
