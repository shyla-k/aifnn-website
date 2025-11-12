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

  // Auto hide feedback
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailValid(isValid || value === "");
    }
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div>
        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full p-2 rounded bg-gray-800 text-gray-200 border focus:outline-none focus:ring-2 ${
            emailValid
              ? "border-[#0045ff80] focus:ring-blue-500"
              : "border-red-500 focus:ring-red-500"
          }`}
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
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "sending" || !emailValid || !formData.email}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale:
            !emailValid || !formData.email || status === "sending" ? 1 : hovered ? 1.05 : [1, 1.03, 1],
          boxShadow:
            emailValid && formData.email && status !== "sending"
              ? hovered
                ? "0 0 25px rgba(0, 145, 255, 1)"
                : "0 0 18px rgba(0, 115, 255, 0.8)"
              : "0 0 0px rgba(0,0,0,0)",
        }}
        transition={{
          duration: hovered ? 0.25 : 1.5,
          repeat: !hovered && emailValid && formData.email ? Infinity : 0,
          repeatType: "mirror",
        }}
        className={`mt-6 w-full px-8 py-3 rounded-md font-semibold text-white transition-all duration-300 ${
          status === "sending" || !emailValid || !formData.email
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-b from-[#052042] to-[#001229] border border-[#0045ff80]"
        }`}
        style={{
          background: "linear-gradient(145deg, #001229, #052042)",
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
