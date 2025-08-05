import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// THIS IS YOUR VITE CONFIGURATION FILE

export default defineConfig({
  // This base path is essential for GitHub Pages
  base: '/punto-migrare-react/', 
  plugins: [react()],
})