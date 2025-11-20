// src/components/ContactForm.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [checkingDomain, setCheckingDomain] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");
  const [emailSuggestion, setEmailSuggestion] = useState("");
  const validateTimer = useRef(null);

  const apiUrl =
    import.meta.env.MODE === "development" ? "http://localhost:5000" : "https://www.aifnn.com";

  // ------------ DISPOSABLE EMAIL BLOCK LIST ------------
  const disposableDomains = new Set([
    "mailinator.com", "10minutemail.com", "tempmail.com", "trashmail.com",
    "yopmail.com", "guerrillamail.com", "maildrop.cc", "dispostable.com",
    "getnada.com", "temp-mail.org"
  ]);

  // ------------ TYPO FIXES ------------
  const typoMap = {
    "gnail.com": "gmail.com",
    "gamil.com": "gmail.com",
    "yahho.com": "yahoo.com",
    "yaho.com": "yahoo.com",
    "hotnail.com": "hotmail.com",
    "outlok.com": "outlook.com",
    "aifn.com": "aifnn.com",
  };

  // ------------ BASIC EMAIL FORMAT ------------
  const formatRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z0-9.-]{2,}$/;

  // Debounce email validation
  const scheduleValidateEmail = (val) => {
    clearTimeout(validateTimer.current);
    validateTimer.current = setTimeout(() => validateEmail(val), 300);
  };

  // ============ ULTRA-FRIENDLY BUT STRICT DOMAIN VALIDATION ============
  const validateEmail = async (value) => {
    const email = (value || "").trim().toLowerCase();
    setEmailSuggestion("");
    setEmailMsg("");

    if (!email) {
      setEmailValid(false);
      return;
    }

    // 1) Format check
    if (!formatRegex.test(email)) {
      setEmailValid(false);
      setEmailMsg("❌ Please enter a valid email address.");
      return;
    }

    const [user, domain] = email.split("@");

    // 2) Disposable email check
    if (disposableDomains.has(domain)) {
      setEmailValid(false);
      setEmailMsg("❌ Disposable / temporary emails are not accepted.");
      return;
    }

    // 3) Typo suggestions
    if (typoMap[domain]) {
      const suggested = `${user}@${typoMap[domain]}`;
      setEmailSuggestion(
        `<span class="text-yellow-400">⚠️ Did you mean 
          <button type="button" data-suggest="${suggested}" 
            class="underline text-blue-400 hover:text-blue-300 ml-1">
            ${typoMap[domain]}
          </button>?
        </span>`
      );
      setEmailMsg("⚠ Possible typo detected.");
      setEmailValid(false);
      return;
    }

    // 4) Domain must contain a dot
    if (!domain.includes(".")) {
      setEmailValid(false);
      setEmailMsg("❌ Email domain seems incomplete.");
      return;
    }

    // 5) REAL DNS CHECK → MX then A record
    try {
      setCheckingDomain(true);
      setEmailMsg("⏳ Verifying email domain…");

      // Try MX lookup
      let res = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`, {
        cache: "no-store",
      });
      let data = await res.json();

      const hasMX = data.Answer && Array.isArray(data.Answer) && data.Answer.length > 0;

      if (!hasMX) {
        // Try A record
        res = await fetch(`https://dns.google/resolve?name=${domain}&type=A`, {
          cache: "no-store",
        });
        data = await res.json();

        const hasA = data.Answer && Array.isArray(data.Answer) && data.Answer.length > 0;

        if (!hasA) {
          setEmailValid(false);
          setEmailMsg(`❌ Invalid or unreachable domain: ${domain}`);
          return;
        }
      }

      // MX or A record exists → valid domain
      setEmailValid(true);
      setEmailMsg(`✅ Valid email domain (${domain})`);
    } catch (err) {
      // If DNS checking fails, mark as invalid (safer)
      setEmailValid(false);
      setEmailMsg("⚠ Could not verify domain. Please try again.");
    } finally {
      setCheckingDomain(false);
    }
  };

  // ------------ Typo Suggestion Click Handler ------------
  useEffect(() => {
    const handler = (e) => {
      const btn = e.target.closest("button[data-suggest]");
      if (!btn) return;
      const suggestion = btn.getAttribute("data-suggest");
      setFormData((s) => ({ ...s, email: suggestion }));
      validateEmail(suggestion);
      setEmailSuggestion("");
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const renderSuggestion = () =>
    emailSuggestion ? (
      <div
        className="text-gray-400 text-sm mt-1"
        dangerouslySetInnerHTML={{ __html: emailSuggestion }}
      />
    ) : (
      <p className="text-gray-400 text-sm mt-1"></p>
    );

  // ------------ HANDLE INPUT CHANGES ------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));

    if (name === "email") {
      setEmailMsg("");
      setEmailSuggestion("");
      scheduleValidateEmail(value);
    }
  };

  // ------------ SUBMIT FORM ------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    if (!emailValid) {
      setStatus("error");
      setFeedback("❌ Invalid email. Message not sent.");
      if (!emailMsg) setEmailMsg("❌ Please enter a valid email.");
      return;
    }

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
        setStatus("error");
        setFeedback(`❌ Error: ${data.message || "Unable to send message."}`);
      }
    } catch {
      setStatus("error");
      setFeedback("❌ Network error. Please try again.");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  // ------------ UI ------------
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
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:ring-blue-500"
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
          className="w-full p-2 pr-10 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:ring-blue-500"
        />

        {checkingDomain && (
          <motion.div
            className="absolute right-3 top-3 w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"
          />
        )}

        {!checkingDomain && formData.email && emailValid && (
          <span className="absolute right-3 top-3 text-green-400 text-xl">✔</span>
        )}
        {!checkingDomain && formData.email && !emailValid && (
          <span className="absolute right-3 top-3 text-red-400 text-xl">⚠</span>
        )}
      </div>

      <p
        className={`text-sm mt-1 ${
          emailMsg.includes("✅")
            ? "text-green-400"
            : emailMsg.includes("❌")
            ? "text-red-400"
            : "text-yellow-400"
        }`}
      >
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
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-6 py-3 text-lg font-semibold rounded-xl text-white
            bg-gradient-to-r from-[#052042] to-[#001229]
            border border-[#0045ff80]
            shadow-[0_0_12px_rgba(0,115,255,0.4)]
            hover:shadow-[0_0_25px_rgba(0,115,255,0.8)]
            hover:scale-105 transition-all"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {status !== "idle" && (
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-center mt-4 ${
              status === "success"
                ? "text-green-400"
                : status === "error"
                ? "text-red-400"
                : "text-blue-400"
            }`}
          >
            {feedback}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
