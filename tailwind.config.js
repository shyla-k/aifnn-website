// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyDark: "#0a1930",
        navyMid: "#0e2745",
      },
      keyframes: {
        moveGrid: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(-40px,-40px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(0,69,255,0.3)" }, // soft start/end glow
          "50%": { boxShadow: "0 0 35px rgba(0,69,255,0.8)" }, // brighter mid pulse
        },
      },
      animation: {
        moveGrid: "moveGrid 15s linear infinite",
        "pulse-glow": "glowPulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
