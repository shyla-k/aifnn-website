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
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Button from "./components/Button";

//
// ✅ FIXED CONTACT FORM COMPONENT
//
function ContactFormFixed() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const apiUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000"
      : "https://www.aifnn.com";

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

    setTimeout(() => setStatus("idle"), 5000);
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
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80]"
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
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80]"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          className="w-full p-2 rounded bg-gray-800 text-gray-200 border border-[#0045ff80]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`mt-6 px-8 py-3 bg-gradient-to-b from-[#052042] to-[#001229] border border-[#0045ff80] rounded-md text-white font-semibold shadow-[inset_0_0_10px_rgba(0,115,255,0.25)] hover:shadow-[0_0_15px_rgba(0,115,255,0.4)] hover:scale-105 transition-all duration-300 ${
          status === "sending" ? "opacity-70 cursor-not-allowed" : ""
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
// ✅ MAIN WEBSITE COMPONENT
//
function AICompanyWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-[#0A2342] via-[#0E1E3F] to-black text-white antialiased">

      {/* ===================== NAVBAR ===================== */}
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
            {[
              "about",
              "services",
              "industries",
              "case-studies",
              "Smart-Solutions",
              "staffing",
              "ilearn",
              "contact",
            ].map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-cyan-400 capitalize">
                {id.replace("-", " ")}
              </a>
            ))}
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
            {[
              "about",
              "services",
              "industries",
              "staffing",
              "case-studies",
              "Smart-Solutions",
              "contact",
            ].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-cyan-400 capitalize"
              >
                {id.replace("-", " ")}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ===================== HERO SECTION ===================== */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/background2.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C3C]/60 to-[#081529]/90" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-extrabold text-white"
          >
            Building and Powering the Future with{" "}
            <span className="text-blue-600 text-6xl md:text-8xl">AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We empower organizations with intelligent solutions in AI, digitization,
            automation, and engineering services to thrive in the digital era.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Button onClick={() => setShowModal(true)} variant="primary">
              Get Started
            </Button>
            <Button variant="secondary">Learn More</Button>
          </motion.div>
        </div>
      </section>

      {/* ===================== OTHER SECTIONS ===================== */}
      {/* (About, Services, Industries, Case Studies, Smart Solutions, Staffing, iLearn) */}
      <CaseStudies />

      {/* ===================== CONTACT SECTION ===================== */}
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
                <a
                  href="mailto:shyla.mk@aifnn.com"
                  className="underline text-blue-400"
                >
                  shyla.mk@aifnn.com
                </a>
              </div>
              <div>🌐 www.aifnn.com</div>
            </div>
          </div>

          <ContactFormFixed />
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
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
// ✅ EXPORT
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
