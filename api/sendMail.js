import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    // 1️⃣ Get access token from Microsoft Identity Platform
    const tokenResponse = await fetch(
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

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      throw new Error("Failed to get access token from Microsoft");
    }

    // 2️⃣ Send email via Microsoft Graph
    const mailData = {
      message: {
        subject: `New Contact Form Message from ${name}`,
        body: {
          contentType: "HTML",
          content: `
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b></p>
            <p>${message}</p>
          `,
        },
        toRecipients: [{ emailAddress: { address: process.env.SENDER_EMAIL } }],
        bccRecipients: [{ emailAddress: { address: process.env.BCC_EMAIL } }],
      },
      saveToSentItems: "false",
    };

    const mailResponse = await fetch(
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

    if (mailResponse.ok) {
      return res.status(200).json({ success: true, message: "Email sent successfully!" });
    } else {
      const errorText = await mailResponse.text();
      throw new Error(`Graph API error: ${errorText}`);
    }
  } catch (err) {
    console.error("❌ Email send failed:", err.message);
    return res.status(500).json({ success: false, message: err.message });
  }
}
