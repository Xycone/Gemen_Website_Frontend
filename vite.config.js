import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://www.gemen.tech',
  plugins: [react()],
  server: {
    port: 80
  }
})
