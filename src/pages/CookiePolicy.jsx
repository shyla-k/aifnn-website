// src/pages/SecurityPolicy.jsx
import React, { useEffect } from "react";

export default function SecurityPolicy() {
  useEffect(() => {
    document.title = "Security Policy | AifNN";
    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <meta name="description" content="Learn how AifNN protects your data with industry-leading security practices." />
      <meta property="og:title" content="Security Policy | AifNN" />
      <meta property="og:description" content="Encryption, MFA, firewalls, monitoring — AifNN follows top-tier cybersecurity standards." />
      `
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Security Policy</h1>

        <p className="text-gray-300 mb-4">
          We follow industry-standard security controls including encryption,
          MFA, secure access restrictions, and 24/7 monitoring.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8">Contact</h2>
        <p className="text-gray-300">
          Report issues at <span className="text-blue-400">info@aifnn.com</span>.
        </p>
      </div>
    </div>
  );
}
