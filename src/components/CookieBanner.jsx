import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Load preference from localStorage, delay popup
  useEffect(() => {
    const saved = localStorage.getItem("cookie-preference");
    if (!saved) {
      setTimeout(() => setVisible(true), 1200); // 1.2s delay
    }
  }, []);

  // Save preference helper
  const savePreference = (value) => {
    localStorage.setItem("cookie-preference", value);
    setVisible(false);
    setShowPreferences(false);
  };

  return (
    <>
      {/* PREFERENCES MODAL */}
      <AnimatePresence>
        {showPreferences && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 bg-black/60 backdrop-blur-md z-50
              flex items-center justify-center p-6
            "
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="
                w-full max-w-lg 
                bg-gradient-to-br from-[#031136] via-[#061d4a] to-[#0a2a6f]
                rounded-2xl border border-blue-500/40 
                shadow-[0_0_25px_rgba(37,99,235,0.4)]
                p-6 text-gray-200
              "
            >
              <h2 className="text-xl font-semibold mb-3">Cookie Preferences</h2>

              <p className="text-sm text-gray-300 mb-4">
                You can choose which types of cookies you want to allow. 
                These settings can be changed at any time.
              </p>

              <div className="flex flex-col gap-3 mt-6">
                <button
                  onClick={() => savePreference("necessary")}
                  className="
                    px-4 py-2 rounded-md 
                    bg-gradient-to-b from-[#052042] to-[#001229]
                    border border-[#0045ff80]
                    text-gray-200 text-sm font-medium
                    shadow-[inset_0_0_10px_rgba(0,115,255,0.25)]
                    hover:shadow-[0_0_12px_rgba(0,115,255,0.35)]
                    hover:scale-105 transition-all
                  "
                >
                  Allow Only Necessary Cookies
                </button>

                <button
                  onClick={() => savePreference("all")}
                  className="
                    px-4 py-2 rounded-md 
                    bg-blue-600 
                    border border-blue-400
                    text-white text-sm font-semibold
                    shadow-[0_0_18px_rgba(37,99,235,0.5)]
                    hover:bg-blue-700
                    hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]
                    hover:scale-105 transition-all
                  "
                >
                  Allow All Cookies
                </button>

                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-300 text-sm underline mt-1 hover:text-gray-100"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COOKIE BANNER */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              fixed bottom-0 left-0 w-full z-40
              backdrop-blur-xl
              bg-gradient-to-r from-[#031136]/95 via-[#041b4d]/95 to-[#072866]/95
              border-t border-blue-500/40
              shadow-[0_0_25px_rgba(37,99,235,0.25)]
              text-gray-200
            "
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

              {/* TEXT */}
              <p className="text-sm md:text-base leading-relaxed max-w-3xl">
                We use cookies to improve website performance, enhance user
                experience, and deliver relevant content. For more details, read our{" "}
                <a href="/cookies" className="text-blue-400 underline hover:text-blue-300">
                  Cookie Policy
                </a>.
              </p>

              {/* BUTTONS */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="
                    px-4 py-2 rounded-md 
                    bg-gradient-to-b from-[#052042] to-[#001229]
                    border border-[#0045ff80]
                    text-gray-200 text-sm font-medium
                    shadow-[inset_0_0_10px_rgba(0,115,255,0.25)]
                    hover:shadow-[0_0_12px_rgba(0,115,255,0.35)]
                    hover:scale-105 transition-all
                  "
                >
                  Manage Cookies
                </button>

                <button
                  onClick={() => savePreference("reject")}
                  className="
                    px-4 py-2 rounded-md 
                    bg-gradient-to-b from-[#001a3a] to-[#003a7a]
                    border border-blue-500/70
                    text-white text-sm font-medium
                    shadow-[0_0_12px_rgba(37,99,235,0.35)]
                    hover:shadow-[0_0_18px_rgba(37,99,235,0.6)]
                    hover:scale-105 transition-all
                  "
                >
                  Reject All
                </button>

                <button
                  onClick={() => savePreference("all")}
                  className="
                    px-4 py-2 rounded-md 
                    bg-blue-600 
                    border border-blue-400
                    text-white text-sm font-semibold
                    shadow-[0_0_18px_rgba(37,99,235,0.5)]
                    hover:bg-blue-700
                    hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]
                    hover:scale-105 transition-all
                  "
                >
                  Accept All
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
