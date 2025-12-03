import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'personal-portfolio';
const proxyTarget = process.env.BackendURL||'http://localhost:5000';
export default defineConfig({
  plugins: [react()],
  //base: `/${repoName}/`
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
