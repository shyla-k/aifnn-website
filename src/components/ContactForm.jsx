import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [emailValid, setEmailValid] = useState(null);

  const apiUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "https://www.aifnn.com";

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (value.trim() === "") {
        setEmailValid(null);
      } else {
        setEmailValid(emailPattern.test(value));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailValid) {
      setFeedback("❌ Please enter a valid email before sending.");
      setStatus("error");
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
        setEmailValid(null);
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
      <h3 className="text-2xl font-bold text-white text-center mb-4">
        Contact Us
      </h3>

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
          className={`w-full p-2 rounded bg-gray-800 text-gray-200 border ${
            emailValid === null
              ? "border-[#0045ff80]"
              : emailValid
              ? "border-green-500"
              : "border-red-500"
          } focus:outline-none focus:ring-2 ${
            emailValid === null
              ? "focus:ring-blue-500"
              : emailValid
              ? "focus:ring-green-500"
              : "focus:ring-red-500"
          }`}
        />
        {emailValid === true && (
          <p className="text-green-400 text-sm mt-1">✅ Valid email address</p>
        )}
        {emailValid === false && (
          <p className="text-red-400 text-sm mt-1">❌ Invalid email format</p>
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
      <button
        type="submit"
        disabled={
          status === "sending" ||
          emailValid === false ||
          emailValid === null ||
          formData.email.trim() === ""
        }
        className={`relative mt-6 w-full px-8 py-3 rounded-lg font-semibold text-white text-lg transition-all duration-300
        ${
          status === "sending" || emailValid === false || emailValid === null
            ? "bg-[#0b1830] cursor-not-allowed opacity-70"
            : "bg-gradient-to-b from-[#0b1830] to-[#001229] border border-blue-700 hover:scale-[1.03] active:scale-[0.98]"
        }
        overflow-hidden`}
        style={{
          boxShadow:
            emailValid && status !== "sending"
              ? "0 0 15px rgba(0,115,255,0.6), inset 0 0 8px rgba(0,115,255,0.4)"
              : "inset 0 0 6px rgba(0,120,255,0.3)",
          animation:
            emailValid && status !== "sending"
              ? "pulseGlow 2s ease-in-out infinite"
              : "none",
        }}
      >
        {status === "sending"
          ? "Sending..."
          : emailValid === false
          ? "Invalid Email"
          : "Send Message"}
      </button>

      {/* Feedback Message */}
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

      {/* Pulsing Glow Animation */}
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 12px rgba(0, 115, 255, 0.5),
              inset 0 0 6px rgba(0, 115, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 115, 255, 0.8),
              inset 0 0 10px rgba(0, 115, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 12px rgba(0, 115, 255, 0.5),
              inset 0 0 6px rgba(0, 115, 255, 0.4);
          }
        }
      `}</style>
    </form>
  );
}
