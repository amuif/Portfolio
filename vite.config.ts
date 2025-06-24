import { defineConfig } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  //   visualizer({
  //     open: true,
  //     gzipSize: true,
  //     brotliSize: true,
  //     filename: 'stats.html',
  //   }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
