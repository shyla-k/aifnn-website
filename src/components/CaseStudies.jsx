import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFighterJet,
  FaCar,
  FaHospital,
  FaTractor,
  FaShoppingCart,
  FaIndustry,
} from "react-icons/fa";

// IMPORT IMAGES
import aeroImg from "../assets/aerospace.jpg";
import autoImg from "../assets/automotive.jpg";
import healthImg from "../assets/healthcare.jpg";
import agriImg from "../assets/agriculture.jpg";
import retailImg from "../assets/retail.jpg";
import manuImg from "../assets/manufacturing.jpg";

export default function CaseStudies() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const studies = [
    {
      title: "Aerospace & Defence",
      icon: <FaFighterJet className="text-blue-400 text-4xl" />,
      summary:
        "AI-powered predictive maintenance improving aircraft reliability and mission readiness.",
      image: aeroImg,
      requirement:
        "The client needed an intelligent system to predict aircraft component failures before they occurred, reducing mission-critical downtime.",
      solution:
        "We built a real-time predictive maintenance platform using deep-learning vibration models, anomaly detection and digital twin simulations.",
      benefit:
        "Reduced unplanned maintenance by 42%, improved fleet uptime, and enhanced operational safety compliance.",
    },
    {
      title: "Automotive",
      icon: <FaCar className="text-blue-400 text-4xl" />,
      summary:
        "Computer-vision driven ADAS and automated quality assurance solutions.",
      image: autoImg,
      requirement:
        "The manufacturer required automated driver-assist intelligence and faster defect detection on assembly lines.",
      solution:
        "We deployed deep-vision ADAS modules and real-time defect inspection models integrated into their manufacturing workflow.",
      benefit:
        "30% improvement in production accuracy and major reduction in human inspection workload.",
    },
    {
      title: "Healthcare",
      icon: <FaHospital className="text-blue-400 text-4xl" />,
      summary:
        "AI-enabled diagnostics and continuous patient monitoring solutions.",
      image: healthImg,
      requirement:
        "Hospitals needed support tools to identify patient risk early and reduce ICU overload.",
      solution:
        "We created an AI triage system leveraging medical imaging models and vitals-based predictive algorithms.",
      benefit:
        "Faster diagnosis, reduced clinical workload, and improved patient recovery outcomes.",
    },
    {
      title: "Agriculture",
      icon: <FaTractor className="text-blue-400 text-4xl" />,
      summary:
        "AI-driven crop intelligence and drone-based farm automation.",
      image: agriImg,
      requirement:
        "Farm operators required accurate crop health monitoring and yield prediction across large lands.",
      solution:
        "We implemented drone vision analytics, soil intelligence mapping, and real-time irrigation optimization.",
      benefit:
        "Yield improved by 22%, water usage optimized by 35%, and reduced manual field checks.",
    },
    {
      title: "Retail",
      icon: <FaShoppingCart className="text-blue-400 text-4xl" />,
      summary:
        "Consumer behavior analytics and inventory demand forecasting.",
      image: retailImg,
      requirement:
        "Retailers needed insights into buying patterns to reduce stockouts and overstocks.",
      solution:
        "We built an AI demand forecasting engine and customer journey analytics dashboard.",
      benefit:
        "15% revenue uplift and precise inventory planning reducing waste significantly.",
    },
    {
      title: "Manufacturing",
      icon: <FaIndustry className="text-blue-400 text-4xl" />,
      summary:
        "Smart factory automation with predictive maintenance and quality control.",
      image: manuImg,
      requirement:
        "Factories struggled with high machine downtime and inconsistent product quality.",
      solution:
        "We deployed IoT sensors, predictive ML algorithms, and automated defect-detection vision systems.",
      benefit:
        "Downtime reduced by 40%, operational throughput increased, and cost savings realized.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="case-studies"
      className="py-20 bg-gradient-to-br from-[#050b18] via-[#0b142c] to-[#101b33] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">
          Case Studies
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10
                auto-rows-min items-start">


          {studies.map((study, index) => {
            const expanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-[#0b142c] via-[#0d1733] to-[#0a1228]
                border border-[#1d4ed8]/20 shadow-[0_0_10px_rgba(37,99,235,0.1)]
                rounded-2xl p-6 relative transition-all duration-300"
                whileHover={{ scale: expanded ? 1 : 1.04 }}
              >
                <div className="flex justify-center mb-4">{study.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>

                {!expanded && (
                  <>
                    <p className="text-gray-300 text-sm mb-4">{study.summary}</p>

                    <button
                      onClick={() => toggleExpand(index)}
                      className="
                        mt-2 px-6 py-2 
                        bg-gradient-to-b from-[#07172d] to-[#010a18]
                        border border-[#0045ff40]
                        rounded-md
                        text-white font-medium
                        shadow-[inset_0_0_8px_rgba(0,115,255,0.25)]
                        hover:shadow-[0_0_12px_rgba(0,115,255,0.45)]
                        hover:scale-105 transition-all duration-300
                      "
                    >
                      Learn More
                    </button>
                  </>
                )}

                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-left"
                    >
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-40 object-cover rounded-lg mb-4 border border-blue-900/30"
                      />

                      <p className="text-blue-300 font-semibold mb-2">
                        Client Requirement
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {study.requirement}
                      </p>

                      <p className="text-blue-300 font-semibold mb-2">
                        Our Solution
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {study.solution}
                      </p>

                      <p className="text-blue-300 font-semibold mb-2">
                        Business Impact
                      </p>
                      <p className="text-gray-300 text-sm mb-6">
                        {study.benefit}
                      </p>

                      {/* HIDE BUTTON — MATCHES LEARN MORE STYLE */}
                      <button
  onClick={() => toggleExpand(index)}
  className="
    mt-2 px-6 py-2 
    bg-gradient-to-b from-[#07172d] to-[#010a18]
    border border-[#0045ff40]
    rounded-md mx-auto block
    text-white font-medium
    shadow-[inset_0_0_8px_rgba(0,115,255,0.25)]
    hover:shadow-[0_0_12px_rgba(0,115,255,0.45)]
    hover:scale-105 transition-all duration-300
  "
>
  Hide Details
</button>

                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
