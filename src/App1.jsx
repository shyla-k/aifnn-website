import React from "react";
import { motion } from "framer-motion";

// Modern dark theme inspired AI company landing page
// Uses TailwindCSS + framer-motion

export default function AICompanyWebsite() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2342] via-[#0E1E3F] to-black text-white antialiased">
      
      {/* NAV */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">A</div>
          <div>
            <div className="font-semibold text-lg">AifNN</div>
            <div className="text-xs text-gray-400">AI • ML • Automation</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#cases" className="hover:text-blue-400 transition">Case Studies</a>
          <a href="#team" className="hover:text-blue-400 transition">Team</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:opacity-90 transition">Start Free Trial</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="menu" className="p-2 rounded-md bg-gray-800">☰</button>
          {isOpen && (
            <div className="absolute top-16 right-6 bg-gray-900 p-4 rounded-lg shadow-md flex flex-col gap-4 z-50">
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#services" className="hover:text-blue-400">Services</a>
              <a href="#cases" className="hover:text-blue-400">Case Studies</a>
              <a href="#team" className="hover:text-blue-400">Team</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
              <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:opacity-90 transition">Start Free Trial</a>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Transform Your Business With Smarter AI
        </motion.h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg">
          We design and deploy next-gen AI & ML systems for industries — from agriculture to defense and automotive. Scalable, reliable, and future-ready.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow hover:opacity-90 transition">Get Started</a>
          <a href="#services" className="px-6 py-3 rounded-lg border border-gray-700 hover:border-blue-500 transition">Learn More</a>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">About AifNN</h2>
        <p className="mt-6 text-gray-300 text-center max-w-3xl mx-auto">
          AifNN is a full-stack AI company focused on real-world impact. We bring expertise in data pipelines, model engineering, and edge deployment to solve industry challenges.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Data Ops","Model Engineering","Edge Deployment"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 128, 255, 0.5)" }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow transition"
            >
              <div className="font-semibold text-lg text-blue-400">{item}</div>
              <p className="mt-2 text-sm text-gray-400">We provide scalable, efficient, and future-ready solutions for {item.toLowerCase()}.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center">Our Services</h3>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Custom Vision Systems",
              desc: "Object detection, segmentation, and tracking for industrial and defense.",
            },
            {
              title: "Data Engineering & MLOps",
              desc: "Pipelines, monitoring, feature stores, and reproducible ML training.",
            },
            {
              title: "Edge & Embedded AI",
              desc: "Deploy optimized AI models on edge devices with minimal latency.",
            },
          ].map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 128, 255, 0.5)" }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow transition"
            >
              <div className="text-lg font-semibold text-indigo-400">{s.title}</div>
              <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-blue-400 underline">Request a Pilot</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AifnnSol Highlight Section */}
      <section className="min-h-screen bg-gradient-to-b from-[#0A2342] via-[#0E1E3F] to-black flex items-center justify-center">
        <div className="p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">AifnnSol</h1>
          <p className="mt-2 text-lg text-gray-300">98% Reliable Performance</p>
        </div>
      </section>

      {/* AifnnSol Card */}
      <div className="max-w-xs mx-auto mt-10 rounded-2xl bg-gradient-to-r from-[#0d1f3b] to-[#132d55] p-6 shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-white">98%</h2>
        <p className="text-gray-400 mt-1">Reliable Performance</p>
      </div>

      {/* CASE STUDIES */}
      <section id="cases" className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-gray-950 to-gray-900 rounded-3xl">
        <h3 className="text-2xl font-bold text-center">Case Studies</h3>
        <p className="mt-4 text-center text-gray-400 max-w-2xl mx-auto">
          Explore how AifNN solutions are transforming industries through innovation and scale.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI in Agriculture",
              desc: "Smart crop monitoring and predictive analytics improved yields by 30%.",
            },
            {
              title: "Defense Surveillance",
              desc: "Deployed battlefield surveillance AI reducing human monitoring load by 60%.",
            },
            {
              title: "Automotive Safety",
              desc: "Enhanced driver-assist with real-time vision AI for accident prevention.",
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 128, 255, 0.5)" }}
              className="bg-gray-800 p-6 rounded-xl shadow transition"
            >
              <div className="text-lg font-semibold text-blue-400">{c.title}</div>
              <p className="mt-2 text-sm text-gray-400">{c.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-indigo-400 underline">Learn More</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-gray-950 to-gray-900 rounded-t-3xl">
        <h3 className="text-2xl font-bold text-center">Leadership</h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: "Shyla MK", title: "Founder & CEO" },
            { name: "Dr. Girigowda", title: "Head of Research" },
            { name: "Anita Rao", title: "VP Engineering" },
          ].map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 128, 255, 0.5)" }}
              className="bg-gray-800 p-6 rounded-xl shadow text-center transition"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto flex items-center justify-center text-xl font-bold text-white">
                {p.name[0]}
              </div>
              <div className="mt-4 font-semibold text-white">{p.name}</div>
              <div className="text-sm text-gray-400">{p.title}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="mt-4 text-gray-300">Let us know about your project. We’ll respond within 1-2 business days.</p>
            <div className="mt-6 space-y-3 text-sm text-gray-400">
              <div>📞 +91 86605 06059</div>
              <div>📧 <a href="mailto:shyla.mk@aifnn.com" className="underline text-blue-400">shyla.mk@aifnn.com</a></div>
              <div>🌐 www.aifnn.com</div>
            </div>
          </div>
          <form className="bg-gray-900 p-6 rounded-xl shadow" onSubmit={(e) => { e.preventDefault(); alert('Form submitted (demo)'); }}>
            <label className="block text-sm text-gray-300">Name</label>
            <input className="mt-2 w-full border border-gray-700 bg-gray-800 rounded px-3 py-2 text-white" required />
            <label className="block text-sm mt-4 text-gray-300">Email</label>
            <input className="mt-2 w-full border border-gray-700 bg-gray-800 rounded px-3 py-2 text-white" type="email" required />
            <label className="block text-sm mt-4 text-gray-300">Message</label>
            <textarea className="mt-2 w-full border border-gray-700 bg-gray-800 rounded px-3 py-2 text-white" rows={4} required />
            <button type="submit" className="mt-6 w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium">Send Message</button>
          </form>
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
