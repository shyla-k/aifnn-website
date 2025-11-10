import nodemailer from "nodemailer";
import dns from "dns/promises";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  // ✅ Basic format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format." });
  }

  const domain = email.split("@")[1].toLowerCase();

  // ✅ Allowlist of real known email domains
  const trustedDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "protonmail.com",
    "icloud.com",
    "aifnn.com", // your own domain
  ];

  try {
    // 1️⃣ If in trusted list — auto valid
    if (trustedDomains.includes(domain)) {
      console.log("✅ Trusted email domain:", domain);
    } else {
      // 2️⃣ Otherwise, verify MX record
      const mxRecords = await dns.resolveMx(domain);
      if (!mxRecords || mxRecords.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Email domain has no mail server.",
        });
      }

      // 3️⃣ Optional: stricter check — reject short or suspicious domains
      if (domain.length < 5 || domain.split(".").length < 2) {
        return res.status(400).json({
          success: false,
          message: "Invalid email domain name.",
        });
      }
    }
  } catch {
    return res.status(400).json({
      success: false,
      message: "Could not verify email domain.",
    });
  }

  // ✅ If we reach here → domain looks valid
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AIFNN Contact" <${process.env.EMAIL_USER}>`,
      to: "shyla.mk@aifnn.com",
      subject: `New Contact from ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ success: false, message: "Error sending email." });
  }
}
