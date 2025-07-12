// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Separar Three.js y relacionados
            'three': ['three', '@react-three/fiber', '@react-three/drei'],
            // Separar Framer Motion
            'framer-motion': ['framer-motion'],
            // Separar React
            'react-vendor': ['react', 'react-dom'],
          }
        }
      },
      chunkSizeWarningLimit: 1000 // Aumentar el límite a 1MB
    }
  }
});