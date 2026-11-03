import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  // GitHub Pages sem domínio próprio serve o site em /<repo>/; com domínio, na raiz.
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
