import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { global: {} },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser', // <--- this line resolves build error "'request' is not exported by __vite-browser-external"
    },
}

})
