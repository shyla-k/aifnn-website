import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Cpu,
  Gauge,
  ScanSearch,
  Workflow,
  Bot
} from "lucide-react";

export default function ManufacturingSolutions() {
  const solutions = [
    {
      title: "Smart Factory Automation",
      icon: Factory,
      desc: "AI-driven automation systems streamline production lines, reduce errors, and increase throughput.",
    },
    {
      title: "Predictive Maintenance",
      icon: Gauge,
      desc: "Sensors and machine learning detect equipment issues early to prevent shutdowns and reduce downtime.",
    },
    {
      title: "Quality Inspection AI",
      icon: ScanSearch,
      desc: "High-speed AI cameras detect defects with precision beyond human accuracy.",
    },
    {
      title: "Process Optimization Using ML",
      icon: Workflow,
      desc: "AI models optimize manufacturing workflows, resource allocation, and energy usage.",
    },
    {
      title: "Intelligent Robotics",
      icon: Bot,
      desc: "Autonomous robots handle assembly, packaging, and logistics with adaptive learning.",
    },
    {
      title: "Edge AI for Real-Time Control",
      icon: Cpu,
      desc: "High-speed on-premise computing ensures ultra-low latency decision-making for production lines.",
    }
  ];

  return (
    <div className="w-full bg-[#051F3E] text-white py-20 px-6">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-4">
          Smart AI Solutions in Manufacturing
        </motion.h2>
        <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          AI, robotics, and automation create highly efficient, scalable, and intelligent production ecosystems.
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
          Smart Manufacturing AI Diagram
        </motion.h3>

        <motion.img
          src="/assets/smart_manufacturing.png"
          className="rounded-2xl shadow-2xl w-full blur-sm"
          onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
        />
      </div>
    </div>
  );
}
