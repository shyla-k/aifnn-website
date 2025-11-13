// src/components/ContactForm.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [checkingDomain, setCheckingDomain] = useState(false);
  const [emailMsg, setEmailMsg] = useState(""); // inline message below email
  const [emailSuggestion, setEmailSuggestion] = useState(""); // suggestion HTML
  const validateTimer = useRef(null);

  const apiUrl =
    import.meta.env.MODE === "development" ? "http://localhost:5000" : "https://www.aifnn.com";

  // --- Config lists ---
  const trustedDomains = new Set([
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "protonmail.com",
    "icloud.com",
    "aifnn.com",
  ]);

  const knownCompanyDomains = new Set([
    "aifnn.com", "tcs.com", "infosys.com", "wipro.com", "techmahindra.com",
    "hcl.com", "accenture.com", "cognizant.com", "bosch.com", "siemens.com",
    "deloitte.com", "ey.com", "kpmg.com", "pwc.com", "microsoft.com",
    "google.com", "amazon.com", "intel.com", "qualcomm.com", "honeywell.com",
    "ge.com", "capgemini.com", "ibm.com", "oracle.com", "zoho.com", "adobe.com"
  ]);

  // small disposable list (extend as needed)
  const disposableDomains = new Set([
    "mailinator.com", "10minutemail.com", "tempmail.com", "trashmail.com",
    "yopmail.com", "guerrillamail.com", "maildrop.cc", "dispostable.com",
    "getnada.com", "temp-mail.org"
  ]);

  const typoMap = {
    "gnail.com": "gmail.com",
    "gamil.com": "gmail.com",
    "yahho.com": "yahoo.com",
    "yaho.com": "yahoo.com",
    "hotnail.com": "hotmail.com",
    "outlok.com": "outlook.com",
    "aifn.com": "aifnn.com",
  };

  // Simple email format regex (good balance of strictness)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  // debounce wrapper for domain checks
  const scheduleValidateEmail = (value) => {
    if (validateTimer.current) clearTimeout(validateTimer.current);
    validateTimer.current = setTimeout(() => validateEmail(value), 300);
  };

  // Validate email function
  const validateEmail = async (value) => {
    const email = (value || "").trim().toLowerCase();
    setEmailSuggestion("");
    setEmailMsg("");

    if (!email) {
      setEmailValid(false);
      setEmailMsg("");
      return;
    }

    // 1) format check
    if (!emailRegex.test(email)) {
      setEmailValid(false);
      setEmailMsg("❌ Please enter a valid email address.");
      return;
    }

    const domain = email.split("@")[1];
    if (!domain) {
      setEmailValid(false);
      setEmailMsg("❌ Invalid email domain.");
      return;
    }

    // 2) disposable check
    if (disposableDomains.has(domain)) {
      setEmailValid(false);
      setEmailMsg("❌ Disposable email addresses are not accepted.");
      return;
    }

    // 3) typo suggestion
    if (typoMap[domain]) {
      const fixed = `${email.split("@")[0]}@${typoMap[domain]}`;
      setEmailSuggestion(
        `<span class="text-yellow-400 text-sm">⚠️ Did you mean <button type="button" data-suggest="${fixed}" class="underline text-blue-400 hover:text-blue-300 ml-1"> ${typoMap[domain]} </button> ?</span>`
      );
      setEmailMsg("⚠ Possible domain typo detected.");
      setEmailValid(false);
      return;
    }

    // 4) quick whitelist auto-pass
    if (trustedDomains.has(domain) || knownCompanyDomains.has(domain)) {
      setEmailValid(true);
      setEmailMsg(`✅ Recognized domain: ${domain}`);
      return;
    }

    // 5) MX record check (DoH Google)
    try {
      setCheckingDomain(true);
      setEmailMsg("⏳ Checking domain MX records...");
      const res = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`, { cache: "no-store" });
      const data = await res.json();

      if (data && Array.isArray(data.Answer) && data.Answer.length > 0) {
        setEmailValid(true);
        setEmailMsg(`✅ Valid email domain (${domain}).`);
      } else {
        setEmailValid(false);
        setEmailMsg(`❌ Domain does not appear to accept email: ${domain}`);
      }
    } catch (err) {
      // network/error: fallback to warning but don't auto-pass
      setEmailValid(false);
      setEmailMsg("⚠️ Could not verify domain right now (network).");
    } finally {
      setCheckingDomain(false);
    }
  };

  // attach suggestion click handler (delegation)
  useEffect(() => {
    const handler = (e) => {
      const btn = e.target.closest("button[data-suggest]");
      if (!btn) return;
      const suggestion = btn.getAttribute("data-suggest");
      if (suggestion) {
        setFormData((s) => ({ ...s, email: suggestion }));
        // re-validate immediately
        validateEmail(suggestion);
        // clear suggestion message
        setEmailSuggestion("");
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // keep inline suggestion as dangerouslySetInnerHTML - it's only built from local safe strings
  const renderSuggestion = () =>
    emailSuggestion ? (
      <div
        id="emailSuggestionMsg"
        className="text-gray-400 text-sm mt-1"
        dangerouslySetInnerHTML={{ __html: emailSuggestion }}
      />
    ) : (
      <p id="emailSuggestionMsg" className="text-gray-400 text-sm mt-1"></p>
    );

  // onChange handler (shared)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    if (name === "email") {
      setEmailMsg(""); // clear while typing
      setEmailSuggestion("");
      scheduleValidateEmail(value);
    }
  };

  // Submit handler: button is not disabled per your request.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if currently sending, ignore rapid double submit
    if (status === "sending") return;

    // Check final email validity — we must block send if invalid
    if (!emailValid) {
      setStatus("error");
      setFeedback("❌ Invalid email. Message not sent.");
      // also show inline message
      if (!emailMsg) setEmailMsg("❌ Invalid email. Please correct your email address.");
      return;
    }

    // proceed to send
    setStatus("sending");
    setFeedback("Sending your message...");

    try {
      const res = await fetch(`${apiUrl}/api/sendMail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
        setFeedback("✅ Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
        setEmailValid(false);
        setEmailMsg("");
        setEmailSuggestion("");
      } else {
        const msg = data.message || data.error || "Failed to send";
        setStatus("error");
        setFeedback(`❌ Something went wrong. ${msg}`);
      }
    } catch (err) {
      console.error("❌ Error sending contact form:", err);
      setStatus("error");
      setFeedback("❌ Network error. Please try again later.");
    } finally {
      // keep feedback visible briefly
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-900 p-6 rounded-xl shadow-lg border border-[#0045ff80] max-w-lg mx-auto w-full"
    >
      <h3 className="text-2xl font-bold text-white text-center mb-4">Contact Us</h3>

      {/* Name */}
      <div>
        <label className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 pr-10 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* spinner */}
        {checkingDomain && (
          <motion.div
            className="absolute right-3 top-3 w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        {/* icons */}
        {!checkingDomain && formData.email && emailValid && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute right-3 top-3 text-green-400 text-xl"
          >
            ✔
          </motion.span>
        )}
        {!checkingDomain && formData.email && !emailValid && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute right-3 top-3 text-red-400 text-xl"
          >
            ⚠
          </motion.span>
        )}
      </div>

      {/* email messages */}
      <p id="emailValidationMsg" className={`text-sm mt-1 ${emailMsg.includes("✅") ? "text-green-400" : emailMsg.includes("❌") ? "text-red-400" : "text-yellow-400"}`}>
        {emailMsg}
      </p>
      {renderSuggestion()}

      {/* Message */}
      <div>
        <label className="block text-gray-300 mb-2">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit button - always visible, shape preserved */}
      <button
        type="submit"
        // per your request: do NOT disable the button visually; to avoid double submits we ignore when status === 'sending' in handler.
        className="mt-6 w-10 py-5 px-10 rounded-2xl font-semibold text-white 
                   bg-gradient-to-r from-[#052042] to-[#001229] 
                   border border-[#0045ff80]
                   shadow-[0_0_12px_rgba(0,115,255,0.4)]
                   hover:shadow-[0_0_25px_rgba(0,115,255,0.8)]
                   hover:scale-105 hover:brightness-110
                   transition-all duration-300 ease-in-out tracking-wide"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {/* Feedback message */}
      <AnimatePresence>
        {status !== "idle" && (
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`text-center mt-4 ${status === "success" ? "text-green-400" : status === "error" ? "text-red-400" : "text-blue-400"}`}
          >
            {feedback}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
