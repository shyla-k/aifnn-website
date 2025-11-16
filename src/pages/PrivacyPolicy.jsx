// src/pages/PrivacyPolicy.jsx
import React, { useEffect } from "react";
import Layout from "../components/Layout";
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
    <PolicyLayout title="Privacy Policy">
     <Layout>
        
    <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Privacy Policy</h1>
        <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 2025</p>

        <p className="text-gray-300 mb-4">
          AifNN (“AifNN”, “we”, “our”, “us”) is committed to protecting your privacy and processing your personal information responsibly. This Privacy Policy explains what data we collect, how we use it, and the rights you have regarding your information.

This Policy applies to all AifNN websites, including www.aifnn.com
, sub-domains, and any digital platforms that link to this Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">1. Information We Collect</h2>
        <p className="text-gray-300 mb-4">
          We may collect the following categories of personal information:

1.1 Information You Provide

Name

Email address

Phone number

Company/Organization details

Job title

Message or inquiry details submitted through our forms

Preferences (training interests, service interests, onboarding details)

1.2 Information Collected Automatically

When you browse our website, we may collect:

IP address

Browser type and version

Device information

Pages visited and time spent

Cookies and similar tracking technologies

Site interaction details for analytics and performance improvement

1.3 Information From Third Parties

We may receive personal information from:

Business partners

Marketing platforms (e.g., form services used to submit inquiries)

Social media platforms (public profiles when interacting with our content)

Publicly available sources
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">
          We process your personal information for the following purposes:

To respond to inquiries, messages, and requests

To provide information about our services

To manage client relationships

To improve website performance and user experience

To send marketing communications (only with consent)

To analyze website usage and trends

To secure our systems, prevent fraud, and maintain safety

To comply with legal and regulatory obligations

To conduct analytics, research, and service improvements

We do not sell your personal information.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">3. Legal Basis for Processing</h2>
        <p className="text-gray-300 mb-4">
          We may process your data based on:

Legitimate interests (e.g., website analytics, service improvements)

Contractual necessity (responding to inquiries, delivering services)

Consent (marketing emails, newsletters)

Legal obligation (record-keeping, compliance)
        </p>
        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">4. Cookies and Tracking Technologies</h2>
        <p className="text-gray-300 mb-4">
          AifNN uses cookies to:

Improve user experience

Understand website traffic

Deliver relevant content

Secure the website

You may disable cookies in your browser settings, but this may impact some site features.

For full details, see the AifNN Cookie Policy.
        </p>
         <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">5. How We Share Your Information</h2>
        <p className="text-gray-300 mb-4">
          We may share personal information with:

AifNN internal teams

Trusted service providers (hosting, analytics, form processing)

Business partners assisting with customer communication

Legal or regulatory authorities (if required by law)

We do not share your data with third parties for their own marketing purposes.
        </p>
         <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">6. International Data Transfers</h2>
        <p className="text-gray-300 mb-4">
         Your information may be transferred and processed outside your country of residence.
AifNN ensures appropriate safeguards are in place, including secure hosting and industry-standard protection measures.
        </p>
         <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">7. Data Security</h2>
        <p className="text-gray-300 mb-4">
         AifNN maintains strong security controls including:

Encryption

Secure infrastructure

Access control and authorization

Continuous monitoring

Regular vulnerability assessments

Employee confidentiality agreements

While no system is 100% secure, we take all reasonable measures to protect your information.
        </p>
        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">8. Data Retention</h2>
        <p className="text-gray-300 mb-4">
         We retain personal information only as long as necessary for:

The purpose it was collected

Legal or regulatory compliance

Business continuity and support

Security and auditing

Once no longer needed, data is securely deleted.
        </p>
 <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">8. Data Retention</h2>
        <p className="text-gray-300 mb-4">
         We retain personal information only as long as necessary for:

The purpose it was collected

Legal or regulatory compliance

Business continuity and support

Security and auditing

Once no longer needed, data is securely deleted.
        </p>
        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">9 Contact</h2>
        <p className="text-gray-300 mb-4">
          For any privacy concerns email <span className="text-blue-400">info@aifnn.com</span>.
        </p>
      </div>
      
    </div>
     </Layout>
      </PolicyLayout>

  );
}
