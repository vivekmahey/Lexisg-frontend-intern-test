import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Lexisg-frontend-intern-test/', // 👈 MUST match GitHub repo name
});
