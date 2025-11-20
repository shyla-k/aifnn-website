import React, { useEffect, useState, useRef } from "react";
import Layout from "./Layout";
import { motion } from "framer-motion";

export default function PolicyLayout({ title, children }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const containerRef = useRef(null);

  // Auto-detect headings in the policy content
  useEffect(() => {
    const h2Elements = containerRef.current.querySelectorAll("h2");
    const headingList = Array.from(h2Elements).map((h) => ({
      id: h.id,
      text: h.innerText,
    }));
    setHeadings(headingList);
  }, [children]);

  // Scroll spy logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );

    const elements = document.querySelectorAll("h2");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const lastUpdated = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-10">

        {/* ---------------- Sticky Sidebar ---------------- */}
        <aside
          className="
            lg:w-64 
            bg-[#041226]/50 
            border border-blue-700/20 
            p-5 rounded-xl 
            h-fit 
            top-40 
            sticky 
            backdrop-blur-xl shadow-lg
          "
        >
          <h3 className="text-lg font-semibold text-blue-400 mb-4">On This Page</h3>

          <nav className="flex flex-col gap-3 text-sm">
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                className={`transition ${
                  activeId === h.id
                    ? "text-blue-400 font-semibold"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {h.text}
              </a>
            ))}
          </nav>
{/*
          <div className="mt-6 text-xs text-gray-400 border-t border-blue-800/30 pt-3">
            Last Updated: <span className="text-gray-300">{lastUpdated}</span>
          </div>*/}
        </aside>

        {/* ---------------- Main Content ---------------- */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 prose prose-invert max-w-none space-y-8"
        >
          <h1 className="text-3xl font-bold text-blue-300 mb-6">{title}</h1>
          {children}
        </motion.div>
      </div>
    </Layout>
  );
}
