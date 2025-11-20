import React from "react";
import { motion } from "framer-motion";
import {
  Radar,
  Satellite,
  Crosshair,
  ScanSearch,
  Shield,
  Bot
} from "lucide-react";

export default function DefenseSolutions() {
  const solutions = [
    {
      title: "AI Surveillance & Tracking",
      icon: Radar,
      desc: "Fusion of satellite, UAV, and ground sensor data to detect threats in real time.",
    },
    {
      title: "Autonomous UAV Monitoring",
      icon: Satellite,
      desc: "Drones with AI vision perform patrol, route optimization, and threat identification.",
    },
    {
      title: "Battlefield Object Detection",
      icon: Crosshair,
      desc: "AI models identify enemy units, assets, and intrusions with high accuracy.",
    },
    {
      title: "Perimeter Security Analytics",
      icon: ScanSearch,
      desc: "AI-enabled monitoring to detect human/vehicle movement beyond restricted zones.",
    },
    {
      title: "Cyber Defense Automation",
      icon: Shield,
      desc: "AI systems detect anomalies, prevent intrusions, and secure defense networks.",
    },
    {
      title: "Robotic Recon Systems",
      icon: Bot,
      desc: "Unmanned robots for high-risk reconnaissance and terrain scanning.",
    }
  ];

  return (
    <div className="w-full bg-[#051F3E] text-white py-20 px-6">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Smart AI Solutions in Defense & Surveillance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12"
        >
          AIFNN enhances national defense with AI-driven surveillance, autonomous systems, and predictive intelligence.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0A2E52] rounded-2xl p-6 border border-[#123a63] hover:border-[#1f5fa8] shadow-xl"
          >
            <item.icon className="w-12 h-12 text-[#4CC9F0] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Diagram */}
      <div className="max-w-5xl mx-auto mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Defense AI System Diagram
        </motion.h3>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src="/assets/defense_surveillance.png"
          className="rounded-2xl shadow-2xl w-full blur-sm"
          onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
        />
      </div>
    </div>
  );
}
