import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    proxy: {
      '/api': {
           target: 'https://youtube-downloader-backend-gnsb.vercel.app',
           changeOrigin: true,
           secure: false,      
           ws: true,
       }
  }
  }
})
