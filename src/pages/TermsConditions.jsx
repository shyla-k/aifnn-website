// src/pages/TermsConditions.jsx
import React, { useEffect } from "react";
import PolicyLayout from "../components/PolicyLayout";

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
    <PolicyLayout>
      
      {/* PAGE HEADER — MATCHES PRIVACY POLICY EXACTLY */}
      <div
        className="fixed top-[72px] left-0 right-0 z-40
        bg-gradient-to-b from-[#071036] via-[#041833] to-transparent
        shadow-lg border-b border-blue-900/40"
      >
        <div className="max-w-7xl mx-auto text-center py-4">
          <h1 className="text-4xl md:text-4xl font-bold text-blue-400">
            Terms & Conditions
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="min-h-screen bg-[#020617]/3 text-white py-6 px-6 mt-1">
        <div className="max-w-4xl mx-auto bg-[#020617]/30 border border-blue-800/40 
          rounded-xl p-10 shadow-lg backdrop-blur-sm">

          <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 2025</p>

          <p className="text-gray-300 mb-4">
            By accessing or using our website, you agree to these Terms & Conditions.
          </p>

          {/* Sections */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3" id="acceptance">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-300 mb-4">
            By accessing or using www.aifnn.com (“Website”), you agree to be bound by these Terms. 
            If you do not agree, discontinue use immediately.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3" id="ownership">
            2. Ownership & Intellectual Property
          </h2>
          <p className="text-gray-300 mb-4">
            All content is owned by AifNN or its licensors.  
            Unauthorized copying, modification, or distribution is prohibited.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3" id="license">
            3. Limited License
          </h2>
          <p className="text-gray-300 mb-4">
            AifNN grants a non-transferable, revocable license for informational use only.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3" id="responsibilities">
            4. User Responsibilities
          </h2>
          <p className="text-gray-300 mb-4">
            Users must not engage in unlawful, abusive, or harmful activities.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3" id="thirdparty">
            5. Third-Party Links
          </h2>
          <p className="text-gray-300 mb-4">
            AifNN is not responsible for third-party websites or content.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3" id="noconnf">
            6. Confidential Information
          </h2>
          <p className="text-gray-300 mb-4">
            AifNN does not accept confidential submissions via the website.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3" id="nowarranty">
            7. No Warranties
          </h2>
          <p className="text-gray-300 mb-4">
            The website is provided “as-is” with no warranties.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3" id="liability">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-300 mb-4">
            AifNN is not liable for damages arising from website use.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3" id="contact">
            9. Contact
          </h2>
          <p className="text-gray-300 mb-4">
            For legal inquiries contact <span className="text-blue-400">info@aifnn.com</span>.
          </p>

        </div>
      </div>

    </PolicyLayout>
  );
}
