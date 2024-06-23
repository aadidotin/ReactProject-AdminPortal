import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/auth': "http://localhost:4000/api",
      '/auth': {
        target: 'http://localhost:4000/api/',
        changeOrigin: true
      },
      '/student': {
        target: 'http://localhost:4000/api/',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@script': path.resolve(__dirname, 'src/assets/js'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@hook': path.resolve(__dirname, 'src/hooks'),
    },
  },
})
