import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ✅ Configure base for custom domain
export default defineConfig({
  plugins: [react()],
  base: '/',
});
