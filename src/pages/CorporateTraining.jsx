// File: /src/pages/CorporateTraining.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, BarChart3, Cpu, CheckCircle } from "lucide-react";

export default function CorporateTraining() {
  const [trainingPopupOpen, setTrainingPopupOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [trainingForm, setTrainingForm] = useState({
    name: "",
    email: "",
    topic: "",
  });
  const [fileUpload, setFileUpload] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const apiUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "https://www.aifnn.com";

  const offerings = [
    {
      icon: <Brain className="w-10 h-10 text-blue-400" />,
      title: "Custom AI & ML Programs",
      desc:
        "Tailored training from fundamentals to advanced deep learning and LLMs, aligned to your team's skill levels.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-green-400" />,
      title: "Industry Workshops",
      desc:
        "Use-case based learning for finance, manufacturing, healthcare, retail, automotive, agritech, and more.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-pink-400" />,
      title: "Hands-On Project Labs",
      desc:
        "Teams build real AI solutions including forecasting, computer vision, NLP chatbots and automation workflows.",
    },
  ];

  const outcomes = [
    "Identify AI opportunities & evaluate ROI",
    "Build, tune and deploy ML models",
    "Implement scalable cloud AI pipelines",
    "Adopt LLMs safely for enterprise use",
    "Automate workflows & reduce manual effort",
    "Upskill teams for production readiness",
  ];

  const delivery = [
    "On-site Corporate Workshops",
    "Live Virtual Training",
    "Hybrid Enterprise Programs",
    "Executive AI Strategy Sessions",
  ];

  // -------------------------------
  // UPDATED — Submit using FormData
  // -------------------------------
  const submitTrainingForm = async () => {
    if (!trainingForm.name || !trainingForm.email) {
      alert("Please fill Name and Email.");
      return;
    }

    try {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("name", trainingForm.name);
      formData.append("email", trainingForm.email);
      formData.append("roles", "Corporate Training Inquiry");
      formData.append("experience", "N/A");
      formData.append("brief", trainingForm.topic || "No topic provided");
      formData.append("source", "CorporateTraining Popup");

      if (fileUpload) {
        formData.append("file", fileUpload);
      }

      const res = await fetch(`${apiUrl}/api/talent-request`, {
        method: "POST",
        body: formData, // IMPORTANT: no headers for multipart
      });

      const json = await res.json();

      if (res.ok && json.ok) {
        setSuccessMessage("Successfully submitted! We will contact you soon.");

        setTrainingForm({ name: "", email: "", topic: "" });
        setFileUpload(null);

        // Hide in 3 sec
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        alert(json.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Form Submit Error:", err);
      alert("Network or server error.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* MAIN SECTION */}
      <div className="bg-[#010a1a] text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400">
              iLearn — Corporate AI Training
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Empower your workforce with industry-focused AI, ML and automation skills —
              hands-on, outcome-driven training tailored for teams and leaders.
            </p>
          </motion.header>

          {/* Offerings */}
          <section className="grid md:grid-cols-3 gap-8 mb-12">
            {offerings.map((o, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#031136] via-[#041b4d] to-[#072866] border border-blue-600/30 shadow-xl"
              >
                <div className="mb-4">{o.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{o.title}</h3>
                <p className="text-gray-300 leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </section>

          {/* Outcomes & Delivery */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="p-6 bg-[#071224] rounded-2xl border border-blue-700/30">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Training Outcomes</h3>
              <div className="grid gap-4">
                {outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1" />
                    <p className="text-gray-300">{o}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-6 bg-[#071224] rounded-2xl border border-blue-700/30">
              <h3 className="text-2xl font-bold text-blue-300 mb-6">Delivery Models</h3>
              <div className="grid gap-4">
                {delivery.map((d, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-gradient-to-b from-[#052042] to-[#001229] text-gray-100 font-medium"
                  >
                    {d}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => setTrainingPopupOpen(true)}
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-b from-[#052042] to-[#001229] border border-[#0045ff80] text-white font-semibold shadow-[inset_0_0_10px_rgba(0,115,255,0.25)] hover:shadow-[0_0_15px_rgba(0,115,255,0.4)] transition transform hover:scale-105"
            >
              Contact Us for Corporate Training
            </button>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {trainingPopupOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50 p-6"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="
              relative w-full max-w-lg p-8 rounded-3xl
              bg-[#0a1b33]/70 backdrop-blur-2xl
              border border-blue-500/40
              shadow-[0_0_40px_rgba(0,115,255,0.4)]
            "
          >
            {/* Close */}
            <button
              onClick={() => setTrainingPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-300 text-xl hover:text-white z-30"
            >
              ✕
            </button>

            {/* Success Toast */}
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  absolute top-6 left-1/2 -translate-x-1/2
                  w-[90%] max-w-sm p-4 rounded-lg text-center font-medium
                  bg-[#031b3f]/90 backdrop-blur-xl
                  text-blue-300 border border-blue-500/40
                  shadow-[0_0_20px_rgba(0,115,255,0.45)]
                  z-40
                "
              >
                {successMessage}
              </motion.div>
            )}

            {/* Form */}
            <h2 className="text-center text-2xl font-bold text-blue-300 mb-3">
              Corporate Training Inquiry
            </h2>

            <p className="text-center text-gray-300 text-sm mb-6">
              Share your details and our team will contact you within{" "}
              <span className="text-blue-400 font-semibold">24–48 hours</span>.
            </p>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-gray-400 text-sm">Full Name</label>
                <input
                  value={trainingForm.name}
                  onChange={(e) =>
                    setTrainingForm({ ...trainingForm, name: e.target.value })
                  }
                  type="text"
                  placeholder="Your full name"
                  className="
                    w-full mt-1 p-3 rounded-lg
                    bg-[#081426] border border-blue-600/40 text-gray-200
                    placeholder-gray-500 focus:outline-none focus:border-blue-400
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-400 text-sm">Email Address</label>
                <input
                  value={trainingForm.email}
                  onChange={(e) =>
                    setTrainingForm({ ...trainingForm, email: e.target.value })
                  }
                  type="email"
                  placeholder="you@company.com"
                  className="
                    w-full mt-1 p-3 rounded-lg
                    bg-[#081426] border border-blue-600/40 text-gray-200
                    placeholder-gray-500 focus:outline-none focus:border-blue-400
                  "
                />
              </div>

              {/* Topic */}
              <div>
                <label className="text-gray-400 text-sm">Training Topic / Focus</label>
                <textarea
                  value={trainingForm.topic}
                  onChange={(e) =>
                    setTrainingForm({ ...trainingForm, topic: e.target.value })
                  }
                  rows="3"
                  placeholder="e.g., 2-day LLM workshop for engineering team"
                  className="
                    w-full mt-1 p-3 rounded-lg
                    bg-[#081426] border border-blue-600/40 text-gray-200
                    placeholder-gray-500 focus:outline-none focus:border-blue-400
                  "
                />
              </div>

              {/* FILE Upload */}
              <div>
                <label className="text-gray-400 text-sm">Upload Document (Optional)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={(e) => setFileUpload(e.target.files?.[0] || null)}
                  className="text-gray-300 mt-2"
                />
              </div>

              {/* Submit */}
              <button
                onClick={submitTrainingForm}
                disabled={submitting}
                className="
                  w-full py-3 rounded-lg font-semibold
                  bg-gradient-to-b from-blue-700 to-blue-900
                  border border-blue-500 text-white
                  hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,115,255,0.45)]
                  transition disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {submitting ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
