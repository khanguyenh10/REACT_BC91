import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import sassPlugin from 'vite-plugin-sass';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), sassPlugin()],
})
