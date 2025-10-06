import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // ✅ Required for correct asset paths on static hosts like Netlify or Vercel
  build: {
    outDir: 'dist', // ✅ Ensures consistent output folder
  },
})
