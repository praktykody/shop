import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // alias do łatwiejszego importowania
    }
  },
  server: {
    port: 3000, // domyślny port dla aplikacji
    open: true, // automatycznie otwiera przeglądarkę
  }
})
