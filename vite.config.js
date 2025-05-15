import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // this code is used to call directly path using @
  // for example: import Component from '@/component.jsx'
  // instead of: import Component from '../component.jsx'
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});
