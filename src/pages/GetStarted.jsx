// src/pages/GetStarted.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Layers, Cpu } from "lucide-react";

export default function GetStarted() {
  useEffect(() => {
    document.title = "Get Started | AifNN";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060b1a] via-[#040a18] to-black text-white pt-28 pb-20">

      {/* ---------------- HERO ---------------- */}
      <section className="text-center max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-400"
        >
          Let's Build Something Extraordinary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-gray-300 text-lg leading-relaxed"
        >
          Whether you're exploring AI, automation, embedded systems, or digital transformation,
          our experts are ready to help you unlock measurable business value.
        </motion.p>
      </section>

      {/* ---------------- WHY WORK WITH US ---------------- */}
      <section className="mt-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-300 mb-10 text-center">
          Why Partner With AifNN?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[ 
            {
              icon: <Brain className="w-10 h-10 text-blue-400" />,
              title: "AI-Driven Innovation",
              desc: "We apply intelligent automation and machine learning to transform your business processes and accelerate digital maturity."
            },
            {
              icon: <Cpu className="w-10 h-10 text-indigo-400" />,
              title: "Engineering Expertise",
              desc: "From embedded systems to full-scale engineering programs, we deliver reliable, future-ready systems."
            },
            {
              icon: <Layers className="w-10 h-10 text-cyan-400" />,
              title: "Strategic Digital Transformation",
              desc: "We modernize enterprise workflows, optimize operations, and implement resilient digital ecosystems."
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.2 }}
              className="
                bg-gradient-to-b from-[#0a1227] to-[#0b0f1d]
                border border-blue-800/40 shadow-xl 
                p-8 rounded-xl hover:scale-[1.03]
                transition-all duration-300 hover:shadow-blue-500/30
              "
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- WHAT YOU GET ---------------- */}
      <section className="mt-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-300 mb-10 text-center">
          What You Get When You Start With Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "A personalized consultation with domain experts",
            "Technology roadmap tailored to your business",
            "Assessment of AI, Automation & Engineering opportunities",
            "Clear execution plan with timelines and deliverables",
            "Cost-effective implementation strategy",
            "End-to-end support from prototype to deployment",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-start gap-3"
            >
              <span className="text-blue-400 mt-1">✔</span>
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT CTA ---------------- */}
      <section className="mt-24 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-300">
          Ready to Begin Your AI & Digital Transformation Journey?
        </h2>

        <p className="text-gray-400 mt-4 mb-8">
          Tell us what you're looking for — AI, embedded engineering, automation, staffing,
          analytics, or enterprise solutions. Our experts will reach out with a tailored plan.
        </p>

        {/* ✅ FIXED BUTTON — NOW JUMPS TO HOMEPAGE CONTACT SECTION */}
        <button
          onClick={() => {
            window.location.replace("/#contact");

             // Wait for page load, then scroll
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 500);
          }}
          className="
            inline-block px-10 py-3 rounded-md
            bg-gradient-to-b from-[#052042] to-[#001229]
            border border-[#0045ff80]
            shadow-[inset_0_0_10px_rgba(0,115,255,0.25)]
            text-white font-semibold
            hover:shadow-[0_0_15px_rgba(0,115,255,0.4)]
            hover:scale-105 transition-all duration-300
          "
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}
