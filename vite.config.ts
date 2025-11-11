import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
base: '/rede-trabalhadores-site/',
  plugins: [react()],
})
