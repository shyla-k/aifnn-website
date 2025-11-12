import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email address." });
  }

  try {
    // Create Yahoo SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "Shyla.MK@aifnn.com",
      bcc: "shyla.mk@yahoo.com",
      replyTo: email,
      subject: `📩 New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h3>New Message from AifNN Contact Form</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
          <hr />
          <small>This email was sent automatically from the AifNN.com contact form.</small>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
