import fetch from "node-fetch";
import dns from "dns/promises";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format." });
  }

  // Optional MX check
  const domain = email.split("@")[1];
  try {
    await dns.resolveMx(domain);
  } catch {
    console.warn(`⚠️ MX lookup failed for ${domain} — continuing anyway`);
  }

  try {
    console.log("Env vars:", {
      tenant: !!process.env.TENANT_ID,
      client: !!process.env.CLIENT_ID,
      secret: !!process.env.CLIENT_SECRET,
      sender: !!process.env.SENDER_EMAIL,
    });

    // 1️⃣ Get Microsoft Graph token
    const tokenRes = await fetch(
      `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          scope: "https://graph.microsoft.com/.default",
          grant_type: "client_credentials",
        }),
      }
    );

    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      throw new Error("Failed to obtain Microsoft Graph access token");
    }

    // 2️⃣ Create email
    const mailData = {
      message: {
        subject: `📩 New message from ${name} (${email})`,
        body: {
          contentType: "HTML",
          content: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2>New Contact Form Submission</h2>
              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Message:</b></p>
              <p>${message}</p>
              <hr />
              <p style="font-size: 12px; color: gray;">
                Sent automatically from the <a href="https://www.aifnn.com">AifNN.com</a> contact form.
              </p>
            </div>
          `,
        },
        toRecipients: [{ emailAddress: { address: "Shyla.MK@aifnn.com" } }],
        bccRecipients: [{ emailAddress: { address: "shyla.mk@yahoo.com" } }],
        replyTo: [{ emailAddress: { address: email, name } }],
        from: {
          emailAddress: {
            address: process.env.SENDER_EMAIL,
            name: `${name} (via AifNN.com)`,
          },
        },
      },
      saveToSentItems: "false",
    };

    // 3️⃣ Send mail via Microsoft Graph API
    const mailRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.SENDER_EMAIL}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailData),
      }
    );

    if (!mailRes.ok) {
      const errTxt = await mailRes.text();
      console.error("Graph sendMail failed:", errTxt);
      throw new Error(errTxt);
    }

    return res.status(200).json({ success: true, message: "✅ Email sent successfully!" });
  } catch (err) {
    console.error("❌ Email send failed:", err.message);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: err.message,
    });
  }
}
