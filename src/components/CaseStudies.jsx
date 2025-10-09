import { FaFighterJet, FaCar, FaHospital, FaTractor, FaShoppingCart, FaIndustry } from "react-icons/fa";

export default function CaseStudies() {
  const studies = [
    {
      title: "Aerospace & Defence",
      icon: <FaFighterJet className="text-teal-500 text-4xl" />,
      description:
        "Developed AI-powered predictive maintenance systems for aircraft, improving safety and reducing downtime."
    },
    {
      title: "Automotive",
      icon: <FaCar className="text-teal-500 text-4xl" />,
      description:
        "Built intelligent driver-assist and quality inspection systems using computer vision and deep learning."
    },
    {
      title: "Healthcare",
      icon: <FaHospital className="text-teal-500 text-4xl" />,
      description:
        "Designed AI-driven diagnostics and patient monitoring systems to support doctors in faster decision-making."
    },
    {
      title: "Agriculture",
      icon: <FaTractor className="text-teal-500 text-4xl" />,
      description:
        "Implemented smart crop monitoring with AI sensors and drones to optimize yields and reduce resource usage."
    },
    {
      title: "Retail",
      icon: <FaShoppingCart className="text-teal-500 text-4xl" />,
      description:
        "Deployed customer behavior analytics and demand forecasting AI models to increase sales and efficiency."
    },
    {
      title: "Manufacturing",
      icon: <FaIndustry className="text-teal-500 text-4xl" />,
      description:
        "Automated quality checks and predictive maintenance for machines, reducing costs and improving output."
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-teal-400">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-500/40 transition-transform transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{study.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
              <p className="text-gray-300">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
