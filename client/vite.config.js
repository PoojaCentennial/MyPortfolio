import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'MyPortfolio';
const proxyTarget = process.env.BackendURL||'http://localhost:5000';
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, use repo name as base path (e.g., /MyPortfolio/)
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  server: {
    proxy: {
      "/api": {
        target: proxyTarget,
        changeOrigin: true,
      },
      "/auth": {
        target: proxyTarget,
        changeOrigin: true,
      },
    },
  },
})
