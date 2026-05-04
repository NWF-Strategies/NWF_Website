import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target ES2019 for react-snap compatibility (older Puppeteer/Chromium)
    target: 'es2019',
  },
})