import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For production necessity, add "/Kasa/" in base
export default defineConfig({
  base: '/',
  plugins: [react()],
})
