import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Config from "./src/config"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 ,
    strictPort: true
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, 'node_modules/react'),
    }
  }
})
