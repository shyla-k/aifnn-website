// src/pages/LearnMore.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Layers, Cpu } from "lucide-react";

export default function LearnMore() {
  useEffect(() => {
    document.title = "Learn More | AifNN";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#030c28] to-black text-white pt-32 pb-20">

      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto px-6 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-400"
        >
          Discover How AifNN Transforms Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Learn how AI, digitization, engineering, and automation can unlock
          growth, efficiency, and competitive advantage for your organization.
        </motion.p>
      </section>

      {/* 3 KEY AREAS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 mb-24">
        {[
          {
            icon: <Brain className="w-12 h-12 text-blue-400" />,
            title: "AI & Machine Learning",
            desc:
              "From predictive analytics to intelligent automation, our AI capabilities help organizations make smarter decisions and unlock new opportunities."
          },
          {
            icon: <Layers className="w-12 h-12 text-green-400" />,
            title: "Digital Transformation",
            desc:
              "We modernize legacy workflows, optimize business processes, migrate systems, and create scalable digital ecosystems."
          },
          {
            icon: <Cpu className="w-12 h-12 text-pink-400" />,
            title: "Engineering & Embedded Systems",
            desc:
              "We build intelligent embedded platforms, smart devices, and engineering solutions ready for real-world deployment."
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + i * 0.2 }}
            className="bg-gradient-to-b from-[#061a3a] to-[#020b1b] p-8 rounded-2xl
                       border border-blue-900/40 shadow-lg hover:scale-[1.03]
                       transition duration-300"
          >
            <div className="mb-6">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* VALUE SECTION */}
      <section className="max-w-6xl mx-auto px-6 text-center mb-24">
        <h2 className="text-3xl font-bold text-blue-400 mb-8">
          What Makes AifNN Different?
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            "Real-world, industry-grade AI & ML implementations.",
            "End-to-end engineering support from prototype to production.",
            "Automation solutions that drastically reduce operational inefficiencies.",
            "Consulting-first approach—ensuring solutions fit your goals.",
            "Flexible execution: consulting, dedicated teams, or turnkey delivery.",
          ].map((point, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-[#030b28]/60 rounded-xl border border-blue-900/40 
                         shadow-[0_0_20px_rgba(0,50,160,0.15)]"
            >
              <p className="text-gray-300">✔ {point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-white">
          Ready to Explore How We Can Help?
        </h2>
        <p className="text-gray-400 mt-3 mb-8">
          Talk to our experts and discover the right solutions for your business.
        </p>

        <a
          href="/#contact"
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
        </a>
      </section>
    </div>
  );
}
