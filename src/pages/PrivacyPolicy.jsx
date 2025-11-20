// src/pages/PrivacyPolicy.jsx
import React, { useEffect } from "react";
import PolicyLayout from "../components/PolicyLayout";

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
    <PolicyLayout>

      {/* PAGE HEADER */}
       <div className="fixed top-[72px] left-0 right-0 z-40
  bg-gradient-to-b from-[#071036] via-[#041833] to-transparent
  shadow-lg border-b border-blue-900/40
">
      <div className="max-w-7xl mx-auto text-center py-4">
        <h1 className="text-4xl md:text-4xl font-bold text-blue-400">
          Privacy Policy
        </h1>
      </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="min-h-screen bg-[#020617]/3 text-white py-6 px-6 mt-1">
        <div className="
          max-w-4xl mx-auto 
      bg-[#020617]/30 
      border border-blue-800/40 
      rounded-xl 
      p-10 
      shadow-lg 
      backdrop-blur-sm
        ">

          <p className="text-gray-300 mb-4">
            <strong>Effective Date:</strong> 2025
          </p>

          <p className="text-gray-300 mb-4">
            AifNN (“AifNN”, “we”, “our”, “us”) is committed to protecting your privacy 
            and processing your personal information responsibly. This Privacy Policy 
            explains what data we collect, how we use it, and the rights you have 
            regarding your information.
          </p>

          <p className="text-gray-300 mb-4">
            This Policy applies to all AifNN websites, including www.aifnn.com, 
            sub-domains, and any digital platforms that link to this Privacy Policy.
          </p>

          {/* 1. Information We Collect */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            1. Information We Collect
          </h2>

          <p className="text-gray-300 mb-4">
            We may collect the following categories of personal information:
            <br /><br />

            <strong>1.1 Information You Provide</strong><br />
            Name, Email, Phone number, Company details, Job title, Messages, Preferences.
            <br /><br />

            <strong>1.2 Information Collected Automatically</strong><br />
            IP address, browser details, device info, site usage, cookies, analytics data.
            <br /><br />

            <strong>1.3 Information From Third Parties</strong><br />
            Business partners, marketing tools, social media platforms, public sources.
          </p>

          {/* 2. How We Use Information */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-300 mb-4">
            We use your data to provide services, improve performance, send updates 
            (with consent), secure systems, comply with laws, and conduct analytics.
            <br />
            <strong>We do not sell your personal information.</strong>
          </p>

          {/* 3. Legal Basis */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            3. Legal Basis for Processing
          </h2>
          <p className="text-gray-300 mb-4">
            Legitimate interests, contractual necessity, consent, and legal obligations.
          </p>

          {/* 4. Cookies */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-300 mb-4">
            AifNN uses cookies to improve experience, understand traffic, and secure the site.
            You may disable cookies, but some features may not function properly.
          </p>

          {/* 5. Sharing */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            5. How We Share Your Information
          </h2>
          <p className="text-gray-300 mb-4">
            We share data with internal teams, trusted providers, partners, and if required by law.
            We do NOT share your data for third-party marketing.
          </p>

          {/* 6. Transfers */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            6. International Data Transfers
          </h2>
          <p className="text-gray-300 mb-4">
            Your data may be stored internationally with proper safeguards.
          </p>

          {/* 7. Security */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            7. Data Security
          </h2>
          <p className="text-gray-300 mb-4">
            Encryption, monitoring, secure infrastructure, access control, audits, 
            and confidentiality policies help protect your data.
          </p>

          {/* 8. Retention */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            8. Data Retention
          </h2>
          <p className="text-gray-300 mb-4">
            We retain data only as long as needed for business, legal, or security purposes.
          </p>

          {/* 9. Contact */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            9. Contact
          </h2>
          <p className="text-gray-300 mb-4">
            For any privacy concerns email{" "}
            <span className="text-blue-400">info@aifnn.com</span>.
          </p>
        </div>
      </div>

    </PolicyLayout>
  );
}
