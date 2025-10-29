import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser"; // 👈 Added EmailJS import
import Logo from "../assets/AifNN_darkbluebackground1.png"; // Adjust path if needed

function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      // ✅ 1. Send to Formspree (for submission logging)
      const response = await fetch("https://formspree.io/f/mpwopkak", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      // ✅ 2. Send via EmailJS (for email notification + auto-reply)
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your Template ID
        form,
        "YOUR_PUBLIC_KEY" // Replace with your Public Key
      );

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        throw new Error("Formspree submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg transition-all max-w-lg mx-auto text-white border border-gray-800">
      <div className="flex items-center justify-center mb-4">
        <img src={Logo} alt="Company Logo" className="w-16 h-16 rounded-full shadow-lg" />
      </div>
      <h2 className="text-center text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300">Name</label>
          <input
            className="mt-2 w-full border border-gray-700 bg-gray-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            name="name"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300">Email</label>
          <input
            className="mt-2 w-full border border-gray-700 bg-gray-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="email"
            name="email"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300">Message</label>
          <textarea
            className="mt-2 w-full border border-gray-700 bg-gray-800 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows={4}
            name="message"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className={`mt-6 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium transition-transform transform hover:scale-105 hover:shadow-lg ${
            status === "submitting" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* ✅ Success / Error Modals */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              className={`rounded-2xl shadow-2xl p-8 text-center w-80 sm:w-96 ${
                status === "success"
                  ? "bg-gradient-to-b from-gray-800 to-gray-900 border border-green-500"
                  : "bg-gradient-to-b from-gray-800 to-gray-900 border border-red-500"
              }`}
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-16 h-16 mx-auto mb-4 rounded-full shadow-md"
              />
              <h3
                className={`text-2xl font-semibold mb-2 ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status === "success" ? "✅ Message Sent!" : "❌ Message Failed"}
              </h3>
              <p className="text-gray-300 mb-6">
                {status === "success"
                  ? "Thank you for reaching out! We'll get back to you soon."
                  : "Something went wrong. Please try again later."}
              </p>

              <button
                onClick={() => setStatus("idle")}
                className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                  status === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {status === "success" ? "Close" : "Retry"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
