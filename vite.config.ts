import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Konfigirasyon Vite pou GitHub Pages
export default defineConfig({
  base: '/',
  plugins: [react()],
})
