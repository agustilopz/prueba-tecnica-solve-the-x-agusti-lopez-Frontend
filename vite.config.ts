import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001, // 👈 cambia el puerto
    host: true // permite acceder desde IPs externas si lo necesitas
  }
})
