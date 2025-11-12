import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [hovered, setHovered] = useState(false);

  const apiUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "https://www.aifnn.com";

  // Hide feedback after 4 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Handle input + validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailValid(isValid || value === "");
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailValid) {
      setStatus("error");
      setFeedback("❌ Invalid email. Cannot send request.");
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

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFeedback("✅ Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (err) {
      console.error("❌ Error:", err.message);
      setStatus("error");
      setFeedback("❌ Something went wrong. Please try again later.");
    }
  };

  const formReady =
    formData.name.trim() && formData.message.trim() && formData.email.trim();

  // Input style (glow if form ready)
  const inputClass = (isValid) =>
    `w-full p-2 rounded bg-gray-800 text-gray-200 border focus:outline-none focus:ring-2 ${
      formReady
        ? "border-blue-500 ring-1 ring-blue-400 shadow-[0_0_10px_rgba(0,115,255,0.4)]"
        : isValid
        ? "border-[#0045ff80] focus:ring-blue-500"
        : "border-red-500 focus:ring-red-500"
    }`;

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
          className={inputClass(true)}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass(emailValid)}
        />
        {formData.email && (
          <p
            className={`mt-1 text-sm ${
              emailValid ? "text-green-400" : "text-red-400"
            }`}
          >
            {emailValid ? "✔ Valid email" : "❌ Invalid email"}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-gray-300 mb-2">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className={inputClass(true)}
        />
      </div>

      {/* Submit Button */}
      <motion.button
  type="submit"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  animate={{
    scale: formReady ? (hovered ? 1.05 : [1, 1.03, 1]) : 1,
    // use animated shadow for subtle pulse when ready
    boxShadow:
      formReady && status !== "sending"
        ? hovered
          ? "0 8px 30px rgba(0,145,255,0.95), inset 0 2px 8px rgba(255,255,255,0.03)"
          : "0 6px 18px rgba(0,115,255,0.7), inset 0 1px 6px rgba(255,255,255,0.02)"
        : "none",
  }}
  transition={{
    duration: hovered ? 0.18 : 1.2,
    repeat: !hovered && formReady ? Infinity : 0,
    repeatType: "mirror",
  }}
  // minimal Tailwind classes — visual rules are inline to avoid being purged/overridden
  className="mt-6 w-full px-8 py-3 rounded-md font-semibold text-white focus:outline-none"
  style={{
    // main glossy gradient
    background: "linear-gradient(180deg, #07162b 0%, #001229 100%)",
    border: "1px solid rgba(0,125,255,0.35)",
    color: "#ffffff",
    // inner subtle sheen
    textShadow: "0 1px 0 rgba(255,255,255,0.06)",
    // base low glow (visible when not hovered, stronger animated boxShadow above)
    boxShadow:
      formReady && status !== "sending"
        ? "0 6px 18px rgba(0,115,255,0.6), inset 0 1px 6px rgba(255,255,255,0.02)"
        : "none",
    // smoother transform on hover/press handled by framer
    transition: "transform .15s ease, box-shadow .15s ease",
    // ensure button isn't visually dimmed by opacity or pointer events
    opacity: status === "sending" ? 0.85 : 1,
    cursor: status === "sending" ? "wait" : "pointer",
  }}
>
  {status === "sending" ? "Sending..." : "Send Message"}
</motion.button>



      {/* Feedback */}
      <AnimatePresence>
        {status !== "idle" && (
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
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
