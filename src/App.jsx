import React, { useState } from "react";
import { motion } from "framer-motion";
import iLearnLogo from "./assets/iLearnjustlogo.png";
import CaseStudies from "./components/CaseStudies";
import ThankYou from "./pages/ThankYou";
import { Brain, Layers, Bot, Cpu } from "lucide-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  FaHospital,
  FaMoneyBillWave,
  FaIndustry,
  FaShoppingCart,
  FaTruck,
  FaFighterJet,
  FaCar,
  FaSeedling,
  FaTractor,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Button from "./components/Button";

//
// ✅ Contact Section component (moved out of inline form)
//
function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  // Automatically use localhost when developing
  const apiUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000"
      : "https://www.aifnn.com"; // your deployed domain

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("⏳ Sending your message...");

    try {
      const res = await fetch(`${apiUrl}/api/sendMail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setFeedback("✅ Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      setStatus("error");
      setFeedback("❌ Something went wrong. Please try again later.");
    }

    // Hide message after a few seconds
    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-900 p-6 rounded-xl shadow-lg border border-[#0045ff80]"
    >
      <div>
        <label className="block text-gray-300 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80] focus:ring-2 focus:ring-blue-500"
        />
      </div>

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

      {status !== "idle" && (
        <p
          className={`text-center mt-4 ${
            status === "success"
              ? "text-green-400"
              : status === "error"
              ? "text-red-400"
              : "text-blue-400"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

//
// ✅ Main Website Component
//
function AICompanyWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-[#0A2342] via-[#0E1E3F] to-black text-white antialiased">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md bg-gradient-to-r from-[#031136] via-[#041b4d] to-[#072866] border-b border-blue-500/30 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/AifNN_darkbluebackground1.png" alt="AifNN Logo" className="h-10 w-auto" />
            <span className="text-sm font-medium text-gray-300">
              AI • ML • Automation • Digitization • Engineering
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 text-white font-medium">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#industries" className="hover:text-cyan-400">Industries</a>
            <a href="#case-studies" className="hover:text-cyan-400">Case Studies</a>
            <a href="#Smart-Solutions" className="hover:text-cyan-400">Smart Solutions</a>
            <a href="#staffing" className="hover:text-cyan-400">Staffing Solutions</a>
            <a href="#ilearn" className="flex items-center gap-1 hover:text-cyan-400">
              <img src={iLearnLogo} alt="iLearn" className="h-6 w-auto" />
            </a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900/95 px-6 py-4 space-y-4 text-white font-medium">
            {["about", "services", "industries", "case-studies", "Smart-Solutions", "staffing", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-cyan-400"
              >
                {id.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO, ABOUT, SERVICES, INDUSTRIES, CASE STUDIES, etc. */}
      {/* ... keep your existing sections unchanged ... */}
      <CaseStudies />

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="mt-4 text-gray-300">
              Let us know about your project. We’ll respond within 1–2 business days.
            </p>
            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <div>📞 +91 86605 06059</div>
              <div>
                📧{" "}
                <a href="mailto:shyla.mk@aifnn.com" className="underline text-blue-400">
                  shyla.mk@aifnn.com
                </a>
              </div>
              <div>🌐 www.aifnn.com</div>
            </div>
          </div>

          <ContactSection />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} AifNN — All rights reserved</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

//
// ✅ Export with Router Integration
//
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AICompanyWebsite />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}
