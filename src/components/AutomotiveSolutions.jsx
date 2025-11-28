import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Radar,
  Cpu,
  Crosshair,
  Gauge,
  Bot
} from "lucide-react";

export default function AutomotiveSolutions() {
  const solutions = [
    {
      title: "Advanced Driver Assist Systems (ADAS)",
      icon: Radar,
      desc: "AI vision detects lanes, pedestrians, obstacles, blind-spot threats, and driving anomalies.",
    },
    {
      title: "Autonomous Driving Intelligence",
      icon: Car,
      desc: "Full-stack decision-making for steering, acceleration, braking, and environment awareness.",
    },
    {
      title: "Predictive Vehicle Maintenance",
      icon: Gauge,
      desc: "Real-time engine health monitoring and predictive failure analysis.",
    },
    {
      title: "Smart In-Cabin Monitoring",
      icon: Cpu,
      desc: "Driver fatigue detection, mood sensing, and gesture-driven controls.",
    },
    {
      title: "Accident Prevention AI",
      icon: Crosshair,
      desc: "AI alerting system predicts hazardous events and prevents collisions.",
    },
    {
      title: "Intelligent Driver Assistance Robots",
      icon: Bot,
      desc: "AI-enabled support systems for parking, navigation, and autonomous valet operations.",
    }
  ];

  return (
    <div className="w-full bg-[#051F3E] text-white py-20 px-6">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Smart AI Solutions in Automotive
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Bringing automation, safety, and intelligence to next-generation automotive systems.
        </motion.p>
      </div>

      {/* CARDS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, borderColor: "#1f5fa8" }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A2E52] p-6 rounded-2xl border border-[#123a63] shadow-xl"
          >
            <item.icon className="w-12 h-12 text-[#4CC9F0] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* DIAGRAM */}
      <div className="max-w-5xl mx-auto mt-20">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Automotive Safety AI Diagram
        </motion.h3>

        <motion.img
          src="/assets/automotive_safety.png"
          alt="Automotive AI Safety Diagram"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-2xl shadow-2xl w-full blur-sm"
          onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
        />
      </div>

    </div>
  );
}
