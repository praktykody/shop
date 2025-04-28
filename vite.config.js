import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/shop/dist/',
  resolve: {
    alias: {
      '@': '/src', // alias do łatwiejszego importowania
    }
  },
})
