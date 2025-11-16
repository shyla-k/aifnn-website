// src/pages/TermsConditions.jsx
import React, { useEffect } from "react";
import Layout from "../components/Layout";

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
     <Layout>
    <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Terms & Conditions</h1>

        <p className="text-gray-300 mb-4"><strong>Effective Date:</strong> 2025</p>

        <p className="text-gray-300 mb-4">
          By accessing or using our website, you agree to these Terms & Conditions.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-300 mb-4">
          By accessing or using the website www.aifnn.com
 (the “Website”), you (“User,” “You,” “Your”) agree to be bound by these Terms & Conditions. If you do not agree to these terms, please discontinue use of the Website immediately.

AifNN (“Company,” “We,” “Us”) may update or modify these Terms at any time without prior notice. Continued use of the Website constitutes acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">2. Ownership & Intellectual Property</h2>
        <p className="text-gray-300 mb-4">
          All content on the Website—including text, graphics, logos, icons, images, software, and other materials (“Materials”)—is the property of AifNN or its licensors, protected under applicable copyright and trademark laws.

You may:

✔ View
✔ Download (for personal, non-commercial use)
✔ Share publicly available pages

You may NOT:

✘ Copy
✘ Modify
✘ Distribute
✘ Sell
✘ Create derivative works
✘ Use AifNN trademarks without permission

Any unauthorized use automatically terminates your limited license to access this Website.
        </p>
<h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">3. Limited License</h2>
        <p className="text-gray-300">
          AifNN grants You a non-exclusive, non-transferable, revocable license to access and use the Website for informational purposes only, subject to compliance with these Terms.

You shall not:

Attempt to interrupt the functioning of the Website

Mirror Website content on any server

Use automated tools (scrapers, bots, crawlers) without explicit permission
        </p>

<h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">4. User Responsibilities</h2>
        <p className="text-gray-300">
          By using this Website, you agree:

Not to violate any local, national, or international laws

Not to upload harmful, abusive, defamatory, obscene, or unlawful content

Not to introduce viruses, trojans, or malicious code

Not to misuse or tamper with security features

Not to publish confidential information belonging to others

Not to impersonate any person or entity

Any violation may result in access termination and legal action.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">5. Third-Party Links & Content</h2>
        <p className="text-gray-300">
          The Website may include:

Third-party articles

External links

Services or tools offered by partners

AifNN does not endorse or control third-party content.

You agree that:

Third-party websites have their own privacy and usage policies

AifNN is not responsible for any damage, loss, or inaccuracy arising from third-party content

Use of external websites is entirely at your own risk
        </p>
<h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">6. Confidential Information</h2>
        <p className="text-gray-300">
          AifNN does not accept confidential or proprietary information through this Website.

If you submit any information (examples: feedback, suggestions, ideas), You:

Grant AifNN an unrestricted license to use, modify, publish, or distribute it

Agree that AifNN has no obligation to keep the information confidential

Acknowledge that personally identifiable information will be processed under the AifNN Privacy Policy
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">7. No Warranties</h2>
        <p className="text-gray-300">
          The Website and all Materials are provided “as is”, without warranties of any kind.

AifNN does not guarantee:

Accuracy or completeness of content

Uninterrupted or error-free access

Virus-free or malware-free access

Fitness for a particular purpose

Some jurisdictions may not allow the exclusion of implied warranties; if so, these limitations may not apply in full.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">8. Limitation of Liability</h2>
        <p className="text-gray-300">
          To the fullest extent permitted by law, AifNN is not liable for:

Direct or indirect damages

Loss of profits or business interruption

Loss of data or programs

Financial losses arising from use or inability to use the Website

Errors, omissions, typographical inaccuracies

Your sole remedy for dissatisfaction with the Website is to stop using it.
        </p>
        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">9. Indemnification</h2>
        <p className="text-gray-300">
          You agree to indemnify and hold harmless AifNN, its employees, affiliates, and partners from any claims, losses, liabilities, damages, or expenses arising out of:

Your misuse of the Website

Your violation of these Terms

Your infringement of intellectual property or rights of others
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">10. Changes to Website or Terms</h2>
        <p className="text-gray-300">
          AifNN reserves the right to:

Modify Website content

Discontinue features

Change access permissions

Update these Terms at any time

Changes take effect immediately upon posting.
        </p>
        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">11. Compliance & Lawful Use</h2>
        <p className="text-gray-300">
         You agree not to:

Attempt unauthorized access to servers, systems, or networks

Conduct activities that overload, damage, or impair Website functionality

Use this Website for harmful, illegal, or fraudulent activities

Violations may result in suspension or legal action.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">12. International Usage</h2>
        <p className="text-gray-300">
         Users accessing the Website from outside India do so at their own risk and are responsible for compliance with local laws
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-3">13. Contact</h2>
        <p className="text-gray-300">
          For any legal questions email <span className="text-blue-400">info@aifnn.com</span>.
        </p>
      </div>
    </div>
     </Layout>
  );
}
