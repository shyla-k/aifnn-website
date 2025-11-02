import React, { useState } from "react";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        // reset fields and redirect immediately
        setValues({ name: "", email: "", message: "" });
        setStatus("success");
        window.location.href = "/thankyou"; // ✅ instant redirect (no timeout)
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900/85 p-6 rounded-xl shadow-md w-full max-w-lg mx-auto"
    >
      <h3 className="text-2xl font-bold mb-4 text-center text-white">
        Contact Us
      </h3>

      {/* Name Field */}
      <label className="block text-sm text-gray-300">Name</label>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        required
        className="mt-2 w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Email Field */}
      <label className="block text-sm text-gray-300 mt-4">Email</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        required
        className="mt-2 w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Message Field */}
      <label className="block text-sm text-gray-300 mt-4">Message</label>
      <textarea
        name="message"
        rows="4"
        value={values.message}
        onChange={handleChange}
        required
        className="mt-2 w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "sending"}
        className={`mt-6 w-full px-4 py-2 rounded-lg font-medium text-white transition ${
          status === "sending"
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90"
        }`}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {/* Optional message */}
      {status === "error" && (
        <p className="text-red-400 text-center mt-4">
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
