import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// Este path viene de la instalacion de types-node
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Cada vez que en los import se use @ se reemplazara por el directorio actual
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  }
})
