// src/pages/ThankYou.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Thank You!
      </motion.h1>
      <motion.p
        className="text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Your message has been sent successfully. We’ll get back to you soon.
      </motion.p>
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded-full shadow"
      >
        Go Back to Home
      </a>
    </div>
  );
}
