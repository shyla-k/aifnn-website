import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ShoppingBag,
  ScanSearch,
  BarChart3,
  BadgePercent,
  PackageSearch
} from "lucide-react";

export default function RetailSolutions() {
  const solutions = [
    {
      title: "AI Customer Behavior Analytics",
      icon: BarChart3,
      desc: "AI analyzes browsing patterns, purchase trends, and customer preferences in real time.",
    },
    {
      title: "Smart Recommendation Engines",
      icon: BadgePercent,
      desc: "Personalized product suggestions increase conversions and customer satisfaction.",
    },
    {
      title: "Automated Checkout & Billing",
      icon: ShoppingCart,
      desc: "AI-powered checkout systems detect items automatically, reducing queues and wait times.",
    },
    {
      title: "Smart Inventory Management",
      icon: PackageSearch,
      desc: "Predict inventory shortages, optimize stocking, and reduce wastage using machine learning.",
    },
    {
      title: "In-store Vision Analytics",
      icon: ScanSearch,
      desc: "AI cameras track footfall, heatmaps, product interaction, and shelf performance.",
    },
    {
      title: "AI-powered Promotions Engine",
      icon: ShoppingBag,
      desc: "Dynamic pricing and personalized offers boost sales through intelligent automation.",
    }
  ];

  return (
    <div className="w-full bg-[#051F3E] text-white py-20 px-6">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-4">
          Smart AI Solutions in Retail
        </motion.h2>
        <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          AI transforms retail through automation, personalization, and advanced customer insights.
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
          Retail AI System Diagram
        </motion.h3>

        <motion.img
          src="/assets/retail_ai.png"
          className="rounded-2xl shadow-2xl w-full blur-sm"
          onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
        />
      </div>
    </div>
  );
}
