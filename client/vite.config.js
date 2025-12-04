import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, always use repo name as base path
  base: '/MyPortfolio/',
  server: {
    proxy: {
      "/api": {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      "/auth": {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
