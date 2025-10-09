
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
    },
  },
  plugins: [],
}

extend: {
  keyframes: {
    moveGrid: {
      "0%": { transform: "translate(0,0)" },
      "100%": { transform: "translate(-40px,-40px)" },
    },
  },
  animation: {
    moveGrid: "moveGrid 15s linear infinite",
  },
}
