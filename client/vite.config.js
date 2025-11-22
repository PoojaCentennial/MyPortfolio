import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'personal-portfolio';

export default defineConfig({
  plugins: [react()],
  //base: `/${repoName}/`
  server: {
    proxy: {
      "/api": {
        target: `http://localhost:5000`,
        changeOrigin: true,
      },
      "/auth": {
        target: `http://localhost:5000`,
        changeOrigin: true,
      },
    },
  },
})
