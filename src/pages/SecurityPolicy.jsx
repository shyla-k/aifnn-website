// src/pages/SecurityPolicy.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

export default function SecurityPolicy() {
  return (
    <>
      <Helmet>
        <title>Security Policy | AifNN</title>

        <meta
          name="description"
          content="Learn about AifNN's advanced cybersecurity measures, encryption standards, incident response protocols, and data protection practices."
        />
        <meta
          name="keywords"
          content="AifNN security policy, cybersecurity, data protection, encryption, MFA, secure systems"
        />
        <link rel="canonical" href="https://www.aifnn.com/security-policy" />

        {/* Open Graph (Facebook/LinkedIn) */}
        <meta property="og:title" content="AifNN | Security Policy" />
        <meta
          property="og:description"
          content="AifNN follows industry-leading cybersecurity practices including encryption, MFA, access control, and incident response."
        />
        <meta property="og:url" content="https://www.aifnn.com/security-policy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.aifnn.com/AifNN_darkbluebackground1.png"
        />

        {/* Twitter Card SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AifNN | Security Policy" />
        <meta
          name="twitter:description"
          content="AifNN ensures robust security using encryption, MFA, firewalls, and 24/7 monitoring."
        />
        <meta
          name="twitter:image"
          content="https://www.aifnn.com/AifNN_darkbluebackground1.png"
        />
      </Helmet>

      <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-blue-400">Security Policy</h1>

          <p className="text-gray-300 mb-4">
            AifNN follows industry-leading cybersecurity practices to protect customer data
            and ensure safe operation of all systems.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            1. Security Measures
          </h2>
          <p className="text-gray-300 mb-4">
            We use encryption, MFA, firewalls, secure access controls, penetration testing,
            cloud redundancy, and 24/7 monitoring.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            2. Data Protection
          </h2>
          <p className="text-gray-300 mb-4">
            All sensitive data is encrypted in transit and at rest. Access is limited to trained personnel.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">
            3. Incident Response
          </h2>
          <p className="text-gray-300 mb-4">
            In case of a data breach, we immediately investigate, contain, notify affected users,
            and take corrective action.
          </p>

          <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">4. Contact</h2>
          <p className="text-gray-300">
            Report security issues at
            <span className="text-blue-400 font-semibold"> info@aifnn.com</span>.
          </p>
        </div>
      </div>
    </>
  );
}
