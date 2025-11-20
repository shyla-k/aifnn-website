import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  ScanSearch,
  Stethoscope,
  Activity,
  TestTube,
  BrainCircuit
} from "lucide-react";

export default function HealthcareSolutions() {
  const solutions = [
    {
      title: "AI Diagnostics & Imaging",
      icon: ScanSearch,
      desc: "AI models analyze X-rays, MRIs, CT scans, and ultrasound images with high precision.",
    },
    {
      title: "Patient Monitoring & Vital Tracking",
      icon: HeartPulse,
      desc: "Continuous real-time monitoring for critical patients with predictive alerting.",
    },
    {
      title: "Clinical Decision Support",
      icon: BrainCircuit,
      desc: "AI assists doctors by analyzing symptoms, history, and medical databases to suggest treatments.",
    },
    {
      title: "Hospital Workflow Automation",
      icon: Activity,
      desc: "Optimized bed management, patient flow, and staff scheduling through machine learning.",
    },
    {
      title: "AI Pathology & Lab Automation",
      icon: TestTube,
      desc: "AI-driven sample analysis and automated testing improves speed and accuracy.",
    },
    {
      title: "Smart Telemedicine Systems",
      icon: Stethoscope,
      desc: "Remote consultation platforms powered by intelligent triaging and vital monitoring.",
    }
  ];

  return (
    <div className="w-full bg-[#051F3E] text-white py-20 px-6">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-4">
          Smart AI Solutions in Healthcare
        </motion.h2>
        <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          AIFNN enhances medical care with AI-assisted diagnostics, automation, and intelligent patient monitoring.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#0A2E52] p-6 rounded-2xl border border-[#123a63]"
          >
            <item.icon className="w-12 h-12 text-[#4CC9F0] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Diagram */}
      <div className="max-w-5xl mx-auto mt-20">
        <motion.h3 className="text-3xl font-bold text-center mb-6">
          Healthcare AI System Diagram
        </motion.h3>

        <motion.img
          src="/assets/healthcare_ai.png"
          className="rounded-2xl shadow-2xl w-full blur-sm"
          onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
        />
      </div>
    </div>
  );
}
