// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
      <Helmet>
        {/* ========== BASIC SEO ========== */}
        <title>Privacy Policy | AifNN</title>
        <meta
          name="description"
          content="Read AifNN's Privacy Policy. Learn how we collect, use, protect, and manage your personal data securely and responsibly."
        />
        <meta name="keywords" content="AifNN privacy policy, data protection, data privacy, AI company privacy" />
        <meta name="author" content="AifNN" />
        <link rel="canonical" href="https://www.aifnn.com/privacy-policy" />

        {/* ========== OPEN GRAPH (Facebook / LinkedIn) ========== */}
        <meta property="og:title" content="Privacy Policy | AifNN" />
        <meta
          property="og:description"
          content="Learn how AifNN protects and manages your personal data."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.aifnn.com/privacy-policy" />
        <meta property="og:image" content="https://www.aifnn.com/AifNN_darkbluebackground1.png" />

        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | AifNN" />
        <meta
          name="twitter:description"
          content="Understand how AifNN collects, uses, and protects your data."
        />
        <meta name="twitter:image" content="https://www.aifnn.com/AifNN_darkbluebackground1.png" />

        {/* ========== STRUCTURED DATA: ORGANIZATION ========== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AifNN",
            url: "https://www.aifnn.com",
            email: "info@aifnn.com",
            logo: "https://www.aifnn.com/AifNN_darkbluebackground1.png",
          })}
        </script>

        {/* ========== STRUCTURED DATA: WEBPAGE ========== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy | AifNN",
            url: "https://www.aifnn.com/privacy-policy",
            description:
              "AifNN Privacy Policy — Learn how we protect, manage, and secure user information.",
          })}
        </script>
      </Helmet>

      {/* ===== PAGE CONTENT (unchanged) ===== */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Privacy Policy</h1>

        <p className="text-gray-300 mb-4">
          <strong>Effective Date:</strong> 2025
        </p>

        <p className="text-gray-300 mb-4">
          AifNN (“we”, “our”, “us”) is committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, store, and safeguard your data when
          you use our website or communicate with us.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-300">1. Information We Collect</h2>
        <p className="text-gray-300 mb-4">
          We may collect personal information such as your name, email, phone number,
          message details, and data automatically collected through cookies and analytics.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-300">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">
          We use your data to respond to inquiries, provide services, improve website
          performance, and ensure security. We do not sell your data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-300">3. Data Sharing</h2>
        <p className="text-gray-300 mb-4">
          We may share your information with service providers and legal authorities
          when required. All partners follow strict data protection standards.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-300">4. Data Security</h2>
        <p className="text-gray-300 mb-4">
          We use encryption, secure servers, firewalls, MFA, and other best practices to
          protect your data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-300">5. Your Rights</h2>
        <p className="text-gray-300 mb-4">
          You may request access, correction, deletion, or restriction of your data at any time.
          Contact us at <span className="text-blue-400 font-semibold">info@aifnn.com</span>.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-300">6. Contact</h2>
        <p className="text-gray-300 mb-4">
          For privacy-related questions, email us at  
          <span className="text-blue-400 font-semibold"> info@aifnn.com</span>.
        </p>
      </div>
    </div>
  );
}
