import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  // Hide feedback after 4 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("Sending your message...");

    try {
      // ✅ Correct API endpoint (Vercel backend)
      const apiUrl =
        import.meta.env.VITE_API_URL ||
        "https://git-repository-aifnn.vercel.app";

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
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`mt-6 w-full px-8 py-3 rounded-md font-semibold text-white transition-all duration-300 ${
          status === "sending"
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-b from-[#052042] to-[#001229] border border-[#0045ff80] hover:scale-105 hover:shadow-[0_0_15px_rgba(0,115,255,0.4)]"
        }`}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
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
    </form>
  );
}
