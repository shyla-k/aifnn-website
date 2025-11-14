// src/pages/TermsConditions.jsx
import React, { useEffect } from "react";

export default function TermsConditions() {

  useEffect(() => {
    document.title = "Terms & Conditions | AifNN";

    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <meta name="description" content="Terms & Conditions of using the AifNN website and services." />
      <meta property="og:title" content="Terms & Conditions | AifNN" />
      <meta property="og:description" content="Understand the rules and policies related to the use of AifNN services." />
      `
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Terms & Conditions</h1>

        <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 2025</p>

        <p className="text-gray-300 mb-4">
          By accessing or using our website, you agree to these Terms & Conditions.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">1. Services</h2>
        <p className="text-gray-300 mb-4">
          We provide AI, ML, automation, digital transformation, and engineering services.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">2. User Responsibilities</h2>
        <p className="text-gray-300 mb-4">
          You must not misuse our systems or attempt unauthorized access.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">3. Contact</h2>
        <p className="text-gray-300">
          For any legal questions email <span className="text-blue-400">info@aifnn.com</span>.
        </p>
      </div>
    </div>
  );
}
