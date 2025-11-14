// src/pages/TermsConditions.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | AifNN</title>
        <meta
          name="description"
          content="Read the Terms & Conditions for using AifNN's AI, ML, automation, digital transformation, and engineering services."
        />
        <meta
          name="keywords"
          content="AifNN terms and conditions, AifNN policies, AI company terms, ML terms and conditions, technology service policies"
        />

        {/* Open Graph SEO */}
        <meta property="og:title" content="AifNN | Terms & Conditions" />
        <meta
          property="og:description"
          content="Detailed Terms & Conditions for using AifNN services including AI, ML, engineering, and automation solutions."
        />
        <meta property="og:url" content="https://www.aifnn.com/terms-conditions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.aifnn.com/AifNN_darkbluebackground1.png" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AifNN | Terms & Conditions" />
        <meta
          name="twitter:description"
          content="Review the Terms & Conditions governing the use of AifNN's AI, ML, and technology solutions."
        />
        <meta name="twitter:image" content="https://www.aifnn.com/AifNN_darkbluebackground1.png" />
      </Helmet>

      <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-blue-400">Terms & Conditions</h1>
          <p className="text-gray-300 mb-4">
            <strong>Effective Date:</strong> 2025
          </p>

          <p className="text-gray-300 mb-4">
            By accessing our website or using our services, you agree to these Terms & Conditions.
            If you disagree, please discontinue use.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">1. Services</h2>
          <p className="text-gray-300 mb-4">
            AifNN provides AI, ML, automation, engineering, and digital transformation services.
            We may modify services at any time.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">2. User Responsibilities</h2>
          <p className="text-gray-300 mb-4">
            You agree not to misuse the website, attempt unauthorized access, upload harmful data,
            or violate any laws.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">3. Intellectual Property</h2>
          <p className="text-gray-300 mb-4">
            All content on aifnn.com is the property of AifNN and cannot be reused without
            permission.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">4. Limitation of Liability</h2>
          <p className="text-gray-300 mb-4">
            AifNN is not liable for indirect, incidental, or consequential damages.
            Liability is limited to the amount paid for our services.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">5. Governing Law</h2>
          <p className="text-gray-300 mb-4">
            These terms follow the laws of Karnataka, India.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">6. Contact</h2>
          <p className="text-gray-300">
            Email any questions to
            <span className="text-blue-400 font-semibold"> info@aifnn.com</span>.
          </p>
        </div>
      </div>
    </>
  );
}
