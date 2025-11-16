import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  // Breadcrumb names
  const titles = {
    "/privacy-policy": "Privacy Policy",
    "/terms-and-conditions": "Terms & Conditions",
    "/security": "Security Policy",
    "/cookies": "Cookie Policy",
    "/disclaimer": "Disclaimer",
  };

  const currentTitle = titles[location.pathname];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-[#0A2342] via-[#0E1E3F] to-black text-white">

      {/* -------- Breadcrumb (on policy pages only) -------- */}
      {currentTitle && (
        <div className="w-full border-b border-blue-500/20 bg-[#04132a]/40 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-4 text-sm text-gray-300 flex gap-2">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <span>/</span>
            <span className="text-blue-300">{currentTitle}</span>
          </div>
        </div>
      )}

      {/* -------- Animated page transition wrapper -------- */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto px-6 py-12"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
