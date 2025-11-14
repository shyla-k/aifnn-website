// src/pages/Disclaimer.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
      <Helmet>
        <title>AifNN — Disclaimer</title>
        <meta
          name="description"
          content="AifNN legal disclaimer outlining limitations of liability, accuracy of information, and use of AI, ML, and automation content on our platform."
        />
        <link rel="canonical" href="https://www.aifnn.com/disclaimer" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Disclaimer</h1>

        <p className="text-gray-300 mb-4">
          The information provided by AifNN (“we”, “our”, “us”) on this website is
          for general informational purposes only. While we strive for accuracy,
          we make no guarantees regarding completeness, reliability, or suitability
          of the information.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
          1. No Professional Advice
        </h2>
        <p className="text-gray-300 mb-4">
          The content provided does not constitute technical, legal, business,
          or professional advice. Always consult qualified professionals before
          making decisions.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
          2. External Links
        </h2>
        <p className="text-gray-300 mb-4">
          Our website may contain links to external sites. We are not responsible
          for their content, accuracy, or any losses incurred by using them.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
          3. Limitation of Liability
        </h2>
        <p className="text-gray-300 mb-4">
          AifNN is not liable for any direct or indirect damages arising from
          the use of our website, services, or third-party integrations.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
          4. Contact
        </h2>
        <p className="text-gray-300">
          If you have any questions regarding this disclaimer, please contact us at  
          <span className="text-blue-400 font-semibold"> info@aifnn.com</span>.
        </p>
      </div>
    </div>
  );
}
