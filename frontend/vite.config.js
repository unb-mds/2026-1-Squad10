import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Isso é obrigatório para rodar no Docker!
  },
  test: {
    globals: true,
    environment: 'jsdom', // Diz ao Vitest para simular um navegador
  },
})
