// smtp-test.js
import nodemailer from "nodemailer";

async function testSMTP() {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: "shyla.mk@aifnn.com", // <-- replace with your email
        pass: "Mirkosha@29", // <-- replace with your Microsoft 365 password
      },
    });

    // verify connection
    await transporter.verify();
    console.log("✅ SMTP connection successful!");

    // send a test email
    const info = await transporter.sendMail({
      from: "shyla.mk@aifnn.com",
      to: "mk_shyla@yahoo.com",
      subject: "SMTP Test Email from AifNN",
      text: "If you receive this, SMTP is working perfectly!",
    });

    console.log("📩 Email sent successfully:", info.response);
  } catch (error) {
    console.error("❌ SMTP test failed:", error.message);
  }
}

testSMTP();
