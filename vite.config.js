import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all IP addresses (0.0.0.0)
    port: 5173  // Specify the port (can be any number)
  },
})
