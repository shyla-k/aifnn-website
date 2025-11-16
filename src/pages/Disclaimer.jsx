// src/pages/Disclaimer.jsx
import React, { useEffect } from "react";
import Layout from "../components/Layout";

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Disclaimer | AifNN";

    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <meta name="description" content="General legal disclaimer for AifNN. Information provided on this site is for educational and informational purposes only." />
      <meta property="og:title" content="Disclaimer | AifNN" />
      <meta property="og:description" content="AifNN is not responsible for loss or damages arising from use of website content." />
      `
    );
  }, []);

  return (
     <Layout>
    <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Disclaimer</h1>

        <p className="text-gray-300 mb-4">
          The information on this website is provided for general purposes only.
          AifNN makes no warranties about completeness, reliability, or accuracy.
        </p>

        <p className="text-gray-300 mb-4">
          Any action you take based on our content is strictly at your own risk.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8">Contact</h2>
        <p className="text-gray-300">
          Contact us at <span className="text-blue-400">info@aifnn.com</span>.
        </p>
      </div>
    </div>
     </Layout>
  );
}
