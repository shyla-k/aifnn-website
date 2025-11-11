import fetch from "node-fetch";
import dns from "dns/promises";
import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // 1️⃣ Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  // 2️⃣ Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format." });
  }

  // 3️⃣ Domain MX record validation (for all real domains)
  const domain = email.split("@")[1];
  try {
    const mxRecords = await dns.resolveMx(domain);

    // Check that MX records exist and look normal
    if (!mxRecords || mxRecords.length === 0) {
      return res.status(400).json({
        success: false,
        message: `The domain '${domain}' doesn't have valid mail servers.`,
      });
    }
  } catch (err) {
    // Fallback message for environments where DNS lookup fails
    console.warn(`⚠️ MX check failed for ${domain}:`, err.message);
    return res.status(400).json({
      success: false,
      message: `Unable to verify domain '${domain}'. Please check your email address.`,
    });
  }

  try {
    // 4️⃣ Get Microsoft Graph access token
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
      throw new Error("Failed to obtain Microsoft Graph access token");
    }

    // 5️⃣ Build email data
   // 5️⃣ Build email data
const mailData = {
  message: {
    subject: `📩 New Contact Form Message from ${name} (${email})`,
    body: {
      contentType: "HTML",
      content: `
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
    },
    toRecipients: [{ emailAddress: { address: "Shyla.MK@aifnn.com" } }],
    bccRecipients: [{ emailAddress: { address: "shyla.mk@yahoo.com" } }],
    replyTo: [{ emailAddress: { address: email, name } }], // 👈 user email here
    from: {
      emailAddress: {
        address: process.env.SENDER_EMAIL, // actual sender
        name: `${name} (via AifNN.com)`, // 👈 this makes it *look* like user's name
      },
    },
  },
  saveToSentItems: "false",
};


    // 6️⃣ Send mail via Microsoft Graph API
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
      return res.status(200).json({ success: true, message: "✅ Email sent successfully!" });
    } else {
      const errorText = await mailResponse.text();
      throw new Error(`Graph API error: ${errorText}`);
    }
  } catch (err) {
    console.error("❌ Email send failed:", err.message);
    return res.status(500).json({ success: false, message: "Failed to send email", error: err.message });
  }
}
import fetch from "node-fetch";
import dns from "dns/promises";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // 🧩 1. Validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format." });
  }

  // 🧩 2. Optional domain check (non-critical)
  const domain = email.split("@")[1];
  try {
    await dns.resolveMx(domain);
  } catch {
    console.warn(`⚠️ MX lookup failed for ${domain} — continuing anyway`);
  }

  try {
    // 🧩 3. Get Microsoft Graph token
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

    // 🧩 4. Build email message
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
        replyTo: [{ emailAddress: { address: email, name } }], // 👈 user email here
        from: {
          emailAddress: {
            address: process.env.SENDER_EMAIL,
            name: `${name} (via AifNN.com)`, // 👈 shows user name but safe sender
          },
        },
      },
      saveToSentItems: "false",
    };

    // 🧩 5. Send via Microsoft Graph
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
