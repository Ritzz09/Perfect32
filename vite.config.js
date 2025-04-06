import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [tailwindcss(),react()],
  server: {
    open: true,
    historyApiFallback: true, // ⬅️ Allows client-side routing (for dev server)
  },
  build: {
    // ⬅️ Important for correct deployment routing
    rollupOptions: {
      input: './index.html',
    },
  }
})

