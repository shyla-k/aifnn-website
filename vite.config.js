import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// ✅ For Vercel (base must be '/')
export default defineConfig({
  plugins: [react()],
  base: "/",
});
