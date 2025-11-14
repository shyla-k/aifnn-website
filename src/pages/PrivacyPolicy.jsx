// src/pages/PrivacyPolicy.jsx
import React, { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | AifNN";

    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <meta name="description" content="AifNN Privacy Policy – Learn how we collect, protect, and use your personal data securely." />
      <meta property="og:title" content="Privacy Policy | AifNN" />
      <meta property="og:description" content="AifNN protects your data with industry-standard security practices." />
      <meta property="og:type" content="website" />
      `
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Privacy Policy</h1>
        <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 2025</p>

        <p className="text-gray-300 mb-4">
          AifNN (“we”, “our”, “us”) is committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, store, and safeguard your data.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">1. Information We Collect</h2>
        <p className="text-gray-300 mb-4">
          We may collect your name, email, phone, and information you submit through forms.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">
          We use your data to respond to inquiries, improve services, and ensure platform security.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">3. Data Security</h2>
        <p className="text-gray-300 mb-4">
          We use encryption, access controls, MFA, and secure hosting infrastructure.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">4. Contact</h2>
        <p className="text-gray-300 mb-4">
          For any privacy concerns email <span className="text-blue-400">info@aifnn.com</span>.
        </p>
      </div>
    </div>
  );
}
