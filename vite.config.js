import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
    }, 
  },
  base: '/ShoppyGlobe/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
