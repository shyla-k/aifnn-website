import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#000914] border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between text-sm text-gray-400">

        <div>© {new Date().getFullYear()} AifNN — All rights reserved.</div>

        <div className="flex flex-wrap gap-6">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</a>
          <a href="/security" className="hover:text-white">Security</a>
          <a href="/cookies" className="hover:text-white">Cookie Policy</a>
          <a href="/disclaimer" className="hover:text-white">Disclaimer</a>
        </div>

      </div>
    </footer>
  );
}
