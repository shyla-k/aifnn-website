// src/pages/CookiePolicy.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function CookiePolicy() {
  return (
    <>
      {/* 🔹 SEO Metadata */}
      <Helmet>
        <title>Cookie Policy | AifNN</title>

        <meta
          name="description"
          content="Learn how AifNN uses cookies to enhance website functionality, improve performance, and provide secure user experiences."
        />
        <meta
          name="keywords"
          content="cookie policy, AifNN cookies, website cookies, analytics cookies, privacy"
        />
        <link rel="canonical" href="https://www.aifnn.com/cookie-policy" />

        {/* OpenGraph */}
        <meta property="og:title" content="Cookie Policy | AifNN" />
        <meta
          property="og:description"
          content="Understand how AifNN uses cookies to enhance your browsing experience."
        />
        <meta
          property="og:image"
          content="https://www.aifnn.com/AifNN_darkbluebackground1.png"
        />
        <meta property="og:url" content="https://www.aifnn.com/cookie-policy" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Page Content */}
      <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-6 text-blue-400">Cookie Policy</h1>

          <p className="text-gray-300 mb-6">
            This Cookie Policy explains how AifNN ("we", "our", "us") uses cookies
            and similar tracking technologies to enhance your browsing experience and
            improve website performance.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            1. What Are Cookies?
          </h2>
          <p className="text-gray-300 mb-4">
            Cookies are small text files placed on your device when you visit a website.
            They help store browsing information such as preferences and activity.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            2. How We Use Cookies
          </h2>
          <p className="text-gray-300 mb-4">We use cookies for the following purposes:</p>
          <ul className="ml-6 text-gray-300 list-disc mb-6">
            <li>Improving website speed and performance</li>
            <li>Enhancing user experience and remembering preferences</li>
            <li>Security and session management</li>
            <li>Analytics to understand how visitors interact with our site</li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            3. Managing Cookies
          </h2>
          <p className="text-gray-300 mb-4">
            You can manage, block, or delete cookies through your browser settings.
            Disabling cookies may impact website functionality and performance.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            4. Updates to This Policy
          </h2>
          <p className="text-gray-300 mb-4">
            We may update this Cookie Policy from time to time. The latest version
            will always be available on this page.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            5. Contact
          </h2>
          <p className="text-gray-300">
            For questions regarding this Cookie Policy, contact us at  
            <span className="text-blue-400 font-semibold"> info@aifnn.com</span>.
          </p>
        </div>
      </div>
    </>
  );
}
