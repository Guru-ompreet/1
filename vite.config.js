Edit vite.config.js:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/1/',  // Replace with your actual repo name
  plugins: [react()],
})
