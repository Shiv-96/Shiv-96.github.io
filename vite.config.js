import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Repo is shiv-96.github.io (user site) so base stays '/'
export default defineConfig({ plugins: [react()], base: '/' })
