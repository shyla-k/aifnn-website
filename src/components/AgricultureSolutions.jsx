import React from "react";
import { motion } from "framer-motion";
import { 
  Sprout, 
  Droplet, 
  Bug, 
  Milk, 
  Tractor, 
  ScanSearch, 
  Leaf, 
  Bot 
} from "lucide-react";

/**
 * AgricultureSolutions.jsx
 * Fully designed JSX section for AIFNN Smart Solutions → Agriculture
 */

export default function AgricultureSolutions() {
  const solutions = [
    {
      title: "AI-Powered Crop Health Monitoring",
      icon: ScanSearch,
      desc: "Early detection of diseases, pests, and nutrient deficiencies using drone and mobile imaging analyzed by AI.",
    },
    {
      title: "Precision Irrigation",
      icon: Droplet,
      desc: "AI-driven irrigation using soil sensors, weather data, and crop growth models to optimize water usage.",
    },
    {
      title: "AI Fertilizer Optimization",
      icon: Leaf,
      desc: "Machine learning calculates the exact nutrients required for maximum yield with minimum waste.",
    },
    {
      title: "Smart Pest & Disease Prediction",
      icon: Bug,
      desc: "Predict outbreaks using climate analytics, satellite NDVI, and historical patterns.",
    },
    {
      title: "Autonomous Drone Spraying",
      icon: Tractor,
      desc: "AI-guided drones spray with precision, reducing chemical costs and increasing coverage speed.",
    },
    {
      title: "Livestock Monitoring AI",
      icon: Milk,
      desc: "Monitor animal health, feed intake, mobility, and environmental conditions in real time.",
    },
    {
      title: "AI-Based Yield Prediction",
      icon: Sprout,
      desc: "Forecast yield using satellite data, soil analytics, and historical crop performance.",
    },
    {
      title: "Smart Harvesting Robots",
      icon: Bot,
      desc: "Robots detect ripeness and perform automated picking with precision and speed.",
    },
  ];

  return (
    <div className="w-full bg-[#051F3E] text-white py-20 px-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Smart AI Solutions in Agriculture
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-12"
        >
          AIFNN integrates AI, robotics, IoT, and satellite analytics to bring accuracy, efficiency, and sustainability to modern farming.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0A2E52] rounded-2xl p-6 shadow-xl border border-[#123a63] hover:shadow-2xl hover:border-[#1f5fa8] transition-all"
          >
            <item.icon className="w-12 h-12 text-[#4CC9F0] mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Visual Diagram */}
      <div className="max-w-5xl mx-auto mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Agriculture AI System Diagram
        </motion.h3>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src="/assets/A_digital_infographic_titled__Smart_AI_Solutions_i.png"
          alt="AI Agriculture Diagram"
          className="rounded-2xl shadow-2xl w-full blur-sm"
          onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
        />
      </div>
    </div>
  );
}
