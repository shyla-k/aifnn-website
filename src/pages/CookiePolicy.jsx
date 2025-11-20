// src/pages/CookiePolicy.jsx
import React, { useEffect } from "react";
import PolicyLayout from "../components/PolicyLayout";

export default function CookiePolicy() {
  useEffect(() => {
    document.title = "Cookie Policy | AifNN";

    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <meta name="description" content="AifNN Cookie Policy – Learn how cookies help improve user experience and performance." />
      <meta property="og:title" content="Cookie Policy | AifNN" />
      <meta property="og:description" content="Understand how AifNN uses cookies and how you can control them." />
      `
    );
  }, []);

  return (
    <PolicyLayout>

      {/* FIXED HEADER SAME AS PRIVACY POLICY */}
      <div
        className="fixed top-[72px] left-0 right-0 z-40
        bg-gradient-to-b from-[#071036] via-[#041833] to-transparent
        shadow-lg border-b border-blue-900/40"
      >
        <div className="max-w-7xl mx-auto text-center py-4">
          <h1 className="text-4xl md:text-4xl font-bold text-blue-400">
            Cookie Policy
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="min-h-screen bg-[#020617]/3 text-white py-6 px-6 mt-1">
        <div className="max-w-4xl mx-auto bg-[#020617]/30 border border-blue-800/40 rounded-xl p-10 shadow-lg backdrop-blur-sm">

          <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 2025</p>

          <p className="text-gray-300 mb-4">
            AifNN uses cookies to improve performance, enhance user experience, and optimize website functionality.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            1. What Are Cookies?
          </h2>
          <p className="text-gray-300 mb-4">
            Cookies are small text files stored on your device when you visit websites.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            2. Types of Cookies We Use
          </h2>
          <p className="text-gray-300 mb-4">
            • Essential<br/>
            • Performance<br/>
            • Functional<br/>
            • Analytics
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            3. Why We Use Cookies
          </h2>
          <p className="text-gray-300 mb-4">
            Cookies help us optimize speed, personalize experience, and maintain security.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            4. Third-Party Cookies
          </h2>
          <p className="text-gray-300 mb-4">
            Some third-party services may set their own cookies (analytics, cloud, security).
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            5. Managing Cookies
          </h2>
          <p className="text-gray-300 mb-4">
            You can disable cookies through browser settings; some features may not work properly.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            6. Contact
          </h2>
          <p className="text-gray-300 mb-4">
            For cookie-related queries contact <span className="text-blue-400">info@aifnn.com</span>.
          </p>

        </div>
      </div>

    </PolicyLayout>
  );
}
