import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// ✅ Correct, single default export
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/api": "http://localhost:3000", // 👈 sends /api/* to backend
    },
  },
});
