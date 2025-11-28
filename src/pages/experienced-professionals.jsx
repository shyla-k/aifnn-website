import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, LineChart, CheckCircle, Layers, BookOpen } from "lucide-react";

export default function ExperiencedProfessionals() {
  const programs = [
    {
      icon: <Brain className="w-10 h-10 text-blue-400" />,
      title: "Advanced AI & ML Mastery",
      desc: "Deep learning architectures, transformers, LLMs, deployment workflows, and enterprise-grade AI implementation.",
    },
    {
      icon: <Layers className="w-10 h-10 text-indigo-400" />,
      title: "Industry Specialization Tracks",
      desc: "Choose from healthcare, automotive, finance, agritech, retail, or manufacturing with real business case simulations.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-pink-400" />,
      title: "Real-World Project Labs",
      desc: "Hands-on projects including NLP chatbots, forecasting engines, computer vision models, and automation pipelines.",
    },
  ];

  const outcomes = [
    "Deploy ML/AI models with real-world workflows",
    "Master LLMs, transformers & advanced architectures",
    "Build production-ready AI projects",
    "Strengthen analytics, automation & model tuning",
    "Bridge skill gaps for AI & engineering roles",
    "Accelerate career growth with expert mentorship",
  ];

  const tracks = [
    "AI in Healthcare: Analytics, diagnostics & vision imaging",
    "AI in Automotive: ADAS, perception & embedded AI",
    "AI in Finance: Fraud detection, forecasting & insights",
    "AI in Manufacturing: Quality inspection, predictive maintenance",
    "AI in Retail: Demand forecasting & personalization",
    "AI in Agritech: Crop analysis & remote sensing",
  ];

  return (
    <div className="bg-gradient-to-b from-[#020617] to-[#000714] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ---------- Header ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-extrabold text-blue-400 mb-4"
        >
          iLearn – Training for Experienced Professionals
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-300 max-w-3xl mx-auto text-lg mb-16"
        >
          Accelerate your career with advanced AI, ML, automation and engineering programs 
          designed for professionals aiming to lead the future of digital innovation.
        </motion.p>

        {/* ---------- Programs Cards ---------- */}
        <section className="grid md:grid-cols-3 gap-10 mb-24">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -5 }}
              transition={{ duration: 0.3 }}
              className="
                p-8 rounded-2xl
                bg-gradient-to-br from-[#031136] via-[#041b4d] to-[#072866]
                border border-blue-600/40
                shadow-[0_0_30px_rgba(0,115,255,0.15)]
              "
            >
              <div className="mb-6">{p.icon}</div>
              <h3 className="text-xl font-semibold text-blue-200 mb-3">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* ---------- Specialization Tracks ---------- */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold text-blue-300 text-center mb-10">
            Industry Specialization Tracks
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="
                  p-6 bg-[#0d1b2a] rounded-xl
                  border border-blue-500/30 
                  shadow-[inset_0_0_15px_rgba(0,115,255,0.15)]
                  text-gray-300 leading-relaxed
                "
              >
                {track}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------- Outcomes ---------- */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold text-blue-300 text-center mb-10">
            What You Will Learn
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-4
                  bg-gradient-to-br from-[#06101f] to-[#020b15]
                  p-5 rounded-xl border border-blue-600/40 shadow-md
                "
              >
                <CheckCircle className="text-blue-400 w-7 h-7" />
                <p className="text-gray-300">{o}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <div className="text-center">
          <a
            href="/contact"
            className="
              inline-block px-10 py-3
              bg-gradient-to-b from-[#052042] to-[#001229]
              border border-[#0045ff80] rounded-md
              text-white font-semibold tracking-wide
              shadow-[inset_0_0_10px_rgba(0,115,255,0.25)]
              hover:shadow-[0_0_15px_rgba(0,115,255,0.4)]
              hover:scale-105 transition-all duration-300
            "
          >
            Contact Us For Professional Training
          </a>
        </div>
      </div>
    </div>
  );
}
