// src/pages/SecurityPolicy.jsx
import React, { useEffect } from "react";
import Layout from "../components/Layout";

export default function SecurityPolicy() {
  useEffect(() => {
    document.title = "Security Policy | AifNN";
    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <meta name="description" content="Learn how AifNN protects your data with industry-leading security practices." />
      <meta property="og:title" content="Security Policy | AifNN" />
      <meta property="og:description" content="Encryption, MFA, firewalls, monitoring — AifNN follows top-tier cybersecurity standards." />
      `
    );
  }, []);

  return (
     <Layout>
    <div className="min-h-screen bg-[#020617] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Security Policy</h1>
<h2 className="text-4xl font-bold mb-6 text-blue-400">SLast Updated: November 2025</h2>
        <p className="text-gray-300 mb-4">

          AifNN (“AifNN”, “we”, “our”, “us”) uses cookies and similar tracking technologies to improve your website experience, understand how our website is used, and deliver relevant content.
This Cookie Policy explains the types of cookies we use, why we use them, and the choices you have.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8">1. What Are Cookies?</h2>
        <p className="text-gray-300">
          Cookies are small text files stored on your device (computer, tablet, obile) when you visit our website.
They help recognize your device, remember your preferences, and streamline your browsing experience.

Cookies may be placed directly by AifNN (first-party cookies) or by third-party providers (third-party cookies).
        </p>

<h2 className="text-2xl font-bold text-blue-300 mt-8">2. Types of Cookies We Use</h2>
        <p className="text-gray-300">
          We categorize cookies based on their purpose and duration.
Here is a clear explanation of each type:
        </p>
        <h3 className="text-2xl font-bold text-blue-300 mt-8">2.1 Strictly Necessary Cookies</h3>
        <p className="text-gray-300">
         These cookies are essential for the website to function.
They cannot be disabled because they:

enable core website operations

maintain session stability

support security features

allow form submissions, logins, and page navigation

Without these cookies, the website may not work properly.
        </p>

<h3 className="text-2xl font-bold text-blue-300 mt-8">2.2 Performance (Analytics) Cookies</h3>
        <p className="text-gray-300">
         Performance cookies help us understand how visitors interact with our website.
They collect information such as:

number of visitors

time spent on pages

pages viewed

loading performance

errors experienced

This data is used only to improve website functionality and user experience.
        </p>

<h3 className="text-2xl font-bold text-blue-300 mt-8">2.3 Functional Cookies</h3>
        <p className="text-gray-300">
         These cookies allow the website to remember your preferences, such as:

region or language

form data

personalization settings

These cookies improve your experience but are not mandatory for the site to work.
        </p>

        <h3 className="text-2xl font-bold text-blue-300 mt-8">2.4 Targeting & Advertising Cookies</h3>
        <p className="text-gray-300">
         These cookies:

track browsing behavior across websites

help deliver relevant ads

enable retargeting campaigns

measure advertising performance

These may be placed by AifNN’s marketing partners, such as advertising networks or social media platforms.

You can disable these cookies through our cookie banner or your browser settings.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8">3. Cookie Duration</h2>
        <p className="text-gray-300">
         Cookies may be stored for varying durations:
        </p>

        <h3 className="text-2xl font-bold text-blue-300 mt-8">3.1 Session Cookies</h3>
        <p className="text-gray-300">
         Active only while your browser is open

Automatically deleted after you close the tab
        </p>

<h3 className="text-2xl font-bold text-blue-300 mt-8">3.2 Persistent Cookies</h3>
        <p className="text-gray-300">
         Remain on your device after the session

Remember preferences and login details

Automatically expire after a set period
        </p>
        <h2 className="text-2xl font-bold text-blue-300 mt-8">4. Third-Party Cookies</h2>
        <p className="text-gray-300">
         4. Third-Party Cookies

AifNN may use third-party services for analytics, advertising, and content delivery.
These providers may set cookies on our site to track:

website usage

ad engagement

content viewing behavior

social media interactions

Third-party providers may include:

Google Analytics

LinkedIn Ads

Facebook/Meta

YouTube (for embedded videos)

Email marketing platforms

CRM or marketing automation tools

Each provider has its own Privacy/Cookie Policy.

You can opt out of targeted ads via:

Digital Advertising Alliance (DAA): http://optout.aboutads.info

Network Advertising Initiative (NAI): http://optout.networkadvertising.org

Google Ads Settings: https://adssettings.google.com

Facebook Ad Preferences: https://www.facebook.com/ads/preferences
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8">5. Managing Your Cookie Preferences</h2>
        
<h3 className="text-2xl font-bold text-blue-300 mt-8">5.1 Browser Settings</h3>
        <p className="text-gray-300">
          You can disable or delete cookies through your browser:

Chrome

Firefox

Safari

Edge

Opera

If you disable cookies entirely, some website features may not function correctly.
        </p>

        <h3 className="text-2xl font-bold text-blue-300 mt-8">5.2 Cookie Banner</h3>
        <p className="text-gray-300">
          When you first visit the site, you will see our cookie consent banner.
You can choose:

Accept All Cookies

Reject Non-Essential Cookies

Customize Preferences

You can change your preferences at any time by clearing cookies and revisiting the site.
        </p>

        <h2 className="text-2xl font-bold text-blue-300 mt-8">6. Data Retention</h2>
        <p className="text-gray-300">
          Cookies and related data are retained only as long as necessary for:

operational purposes

analytics

legal obligations

security requirements

Third-party cookie retention timelines are listed in their own policies.
        </p>
        <h2 className="text-2xl font-bold text-blue-300 mt-8">7. Updates to This Cookie Policy</h2>
        <p className="text-gray-300">
          AifNN may update this Cookie Policy periodically to reflect:

changes in technology

regulatory updates

enhancements to our systems

The updated policy will always be available on this page with a revised "Last Updated" date.
        </p>
        <h2 className="text-2xl font-bold text-blue-300 mt-8">Contact</h2>
        <p className="text-gray-300">
          Report issues at <span className="text-blue-400">info@aifnn.com</span>.
        </p>
      </div>
    </div>
     </Layout>
  );
}
