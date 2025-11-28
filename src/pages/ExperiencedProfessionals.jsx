// File: /src/pages/ExperiencedProfessionals.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Layers, CheckCircle } from "lucide-react";

export default function ExperiencedProfessionals() {
  const [trainingPopupOpen, setTrainingPopupOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [trainingForm, setTrainingForm] = useState({
    name: "",
    email: "",
    topic: "",
  });

  const apiUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "https://www.aifnn.com";

  const programs = [
    {
      icon: <Brain className="w-10 h-10 text-blue-400" />,
      title: "Advanced AI & ML Mastery",
      desc: "Deep learning architectures, transformers, LLMs, deployment workflows, and enterprise-grade AI implementation.",
    },
    {
      icon: <Layers className="w-10 h-10 text-indigo-400" />,
      title: "Industry Specialization Tracks",
      desc: "Choose healthcare, automotive, finance, agritech, retail, or manufacturing with real business case simulations.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-pink-400" />,
      title: "Real-World Project Labs",
      desc: "Hands-on projects: NLP chatbots, forecasting engines, vision models, automation pipelines.",
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
    "AI in Healthcare",
    "AI in Automotive",
    "AI in Finance",
    "AI in Manufacturing",
    "AI in Retail",
    "AI in Agritech",
  ];

  // Submit Form
  const submitTrainingForm = async () => {
    if (!trainingForm.name || !trainingForm.email) {
      alert("Please fill Name and Email.");
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch(`${apiUrl}/api/talent-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trainingForm.name,
          email: trainingForm.email,
          roles: "Experienced Professionals Training",
          experience: "N/A",
          brief: trainingForm.topic,
          source: "Experienced Professionals Popup",
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        setSuccessMessage("Successfully submitted! We will contact you soon.");
        setTrainingForm({ name: "", email: "", topic: "" });
      } else {
        alert(json?.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Network or server error.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#020617] to-[#000714] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
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
          className="text-center text-gray-300 max-w-3xl mx-auto text-lg mb-16"
        >
          Accelerate your career with advanced AI, ML & automation programs designed
          for professionals aiming to lead the future.
        </motion.p>

        {/* Programs */}
        <section className="grid md:grid-cols-3 gap-10 mb-24">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -5 }}
              className="
                p-8 rounded-2xl
                bg-gradient-to-br from-[#031136] via-[#041b4d] to-[#072866]
                border border-blue-600/40 shadow-xl
              "
            >
              <div className="mb-6">{p.icon}</div>
              <h3 className="text-xl font-semibold text-blue-200 mb-3">{p.title}</h3>
              <p className="text-gray-300">{p.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Tracks */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold text-blue-300 text-center mb-10">
            Industry Specialization Tracks
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }}
                className="
                  p-6 bg-[#0d1b2a] rounded-xl border border-blue-500/30
                  shadow-[inset_0_0_15px_rgba(0,115,255,0.15)]
                  text-gray-300
                "
              >
                {track}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-24">
          <h3 className="text-3xl font-bold text-blue-300 text-center mb-10">
            What You Will Learn
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((o, i) => (
              <div key={i}
                className="
                  flex items-start gap-4 bg-[#06101f] p-5 rounded-xl
                  border border-blue-600/40 shadow-md
                "
              >
                <CheckCircle className="text-blue-400 w-7 h-7" />
                <p className="text-gray-300">{o}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setTrainingPopupOpen(true)}
            className="
              px-10 py-3 bg-gradient-to-b from-[#052042] to-[#001229]
              border border-[#0045ff80] rounded-md text-white font-semibold
              shadow-[inset_0_0_10px_rgba(0,115,255,0.25)]
              hover:shadow-[0_0_15px_rgba(0,115,255,0.4)]
              hover:scale-105 transition-all
            "
          >
            Contact Us For Professional Training
          </button>
        </div>
      </div>

      {/* ---------------- POPUP (Same as CorporateTraining) ---------------- */}
      {trainingPopupOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50 p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="
              relative w-full max-w-lg p-8 rounded-3xl
              bg-[#0a1b33]/70 backdrop-blur-2xl
              border border-blue-500/40 shadow-[0_0_40px_rgba(0,115,255,0.4)]
            "
          >
            {/* Close Button */}
            <button
              onClick={() => setTrainingPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-300 text-xl hover:text-white"
            >
              ✕
            </button>

            {/* Floating Success Toast */}
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  absolute top-6 left-1/2 -translate-x-1/2
                  w-[90%] max-w-sm p-4 rounded-lg text-center
                  bg-[#031b3f]/90 backdrop-blur-xl
                  text-blue-300 border border-blue-500/40
                  shadow-[0_0_20px_rgba(0,115,255,0.45)]
                "
              >
                {successMessage}
              </motion.div>
            )}

            {/* Form Header */}
            <h2 className="text-center text-2xl font-bold text-blue-300 mb-3">
              Professional Training Inquiry
            </h2>

            <p className="text-center text-gray-300 text-sm mb-6">
              We will contact you within{" "}
              <span className="text-blue-400 font-semibold">24–48 hours</span>.
            </p>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">Full Name</label>
                <input
                  value={trainingForm.name}
                  onChange={(e) =>
                    setTrainingForm({ ...trainingForm, name: e.target.value })
                  }
                  className="
                    w-full mt-1 p-3 rounded-lg bg-[#081426]
                    border border-blue-600/40 text-gray-200
                    placeholder-gray-500 focus:border-blue-400
                  "
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm">Email Address</label>
                <input
                  value={trainingForm.email}
                  onChange={(e) =>
                    setTrainingForm({ ...trainingForm, email: e.target.value })
                  }
                  type="email"
                  className="
                    w-full mt-1 p-3 rounded-lg bg-[#081426]
                    border border-blue-600/40 text-gray-200
                    placeholder-gray-500 focus:border-blue-400
                  "
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm">Training Topic</label>
                <textarea
                  value={trainingForm.topic}
                  onChange={(e) =>
                    setTrainingForm({ ...trainingForm, topic: e.target.value })
                  }
                  rows="3"
                  className="
                    w-full mt-1 p-3 rounded-lg bg-[#081426]
                    border border-blue-600/40 text-gray-200
                    focus:border-blue-400
                  "
                ></textarea>
              </div>

              {/* Submit */}
              <button
                onClick={submitTrainingForm}
                disabled={submitting}
                className="
                  w-full py-3 rounded-lg font-semibold
                  bg-gradient-to-b from-blue-700 to-blue-900
                  border border-blue-500 text-white
                  hover:scale-[1.02]
                  hover:shadow-[0_0_20px_rgba(0,115,255,0.45)]
                  transition disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
