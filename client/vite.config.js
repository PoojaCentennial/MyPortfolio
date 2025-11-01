import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'personal-portfolio';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`
})
