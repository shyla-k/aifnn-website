import { motion } from "framer-motion";
import {
  FaFighterJet,
  FaCar,
  FaHospital,
  FaTractor,
  FaShoppingCart,
  FaIndustry,
} from "react-icons/fa";

export default function CaseStudies() {
  const studies = [
    {
      title: "Aerospace & Defence",
      icon: <FaFighterJet className="text-blue-400 text-4xl" />,
      description:
        "Developed AI-powered predictive maintenance systems for aircraft, improving safety and reducing downtime.",
    },
    {
      title: "Automotive",
      icon: <FaCar className="text-blue-400 text-4xl" />,
      description:
        "Built intelligent driver-assist and quality inspection systems using computer vision and deep learning.",
    },
    {
      title: "Healthcare",
      icon: <FaHospital className="text-blue-400 text-4xl" />,
      description:
        "Designed AI-driven diagnostics and patient monitoring systems to support doctors in faster decision-making.",
    },
    {
      title: "Agriculture",
      icon: <FaTractor className="text-blue-400 text-4xl" />,
      description:
        "Implemented smart crop monitoring with AI sensors and drones to optimize yields and reduce resource usage.",
    },
    {
      title: "Retail",
      icon: <FaShoppingCart className="text-blue-400 text-4xl" />,
      description:
        "Deployed customer behavior analytics and demand forecasting AI models to increase sales and efficiency.",
    },
    {
      title: "Manufacturing",
      icon: <FaIndustry className="text-blue-400 text-4xl" />,
      description:
        "Automated quality checks and predictive maintenance for machines, reducing costs and improving output.",
    },
  ];

  return (
    <section
      id="case-studies"
      className="py-20 bg-gradient-to-br from-[#050b18] via-[#0b142c] to-[#101b33] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-400">Case Studies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(37,99,235,0.2)",
              }}
              transition={{ duration: 0.3 }}
              className="
                bg-gradient-to-b from-[#0b142c] via-[#0d1733] to-[#0a1228]
                border border-[#1d4ed8]/20
                shadow-[0_0_10px_rgba(37,99,235,0.08)]
                rounded-2xl
                p-6
                text-center
                transition-all duration-300
              "
            >
              <div className="flex justify-center mb-4">{study.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              <p className="text-gray-300 mb-4">{study.description}</p>

              {/* Button with subtle glow */}
              <button
                className="
                  mt-2 px-6 py-2 
                  bg-gradient-to-b from-[#07172d] to-[#010a18]
                  border border-[#0045ff40]
                  rounded-md
                  text-white font-medium
                  shadow-[inset_0_0_8px_rgba(0,115,255,0.15)]
                  hover:shadow-[0_0_12px_rgba(0,115,255,0.3)]
                  hover:scale-105
                  transition-all duration-300
                "
              >
                Know More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
