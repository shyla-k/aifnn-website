// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // explicit classes you use in buttonClasses or similar
    "bg-gradient-to-b",
    "from-[#0a2a55]",
    "to-[#021124]",
    "border-[#0b4cff80]",
    "text-gray-200",
    "shadow-[inset_0_0_6px_rgba(0,115,255,0.25)]",
    "hover:from-[#052042]",
    "hover:to-[#001229]",
    "hover:shadow-[0_0_15px_rgba(0,115,255,0.45)]",
    "hover:text-cyan-400",
    "hover:scale-105",
    // add any other dynamic utilities you use
  ],
};
