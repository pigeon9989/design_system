import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/design_system/',
  build: {
    outDir: 'build',
  },
});
