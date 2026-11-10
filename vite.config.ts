import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// BASE_PATH lo fija el workflow de GitHub Pages ("/<repo>/"). En local es "/".
// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})
