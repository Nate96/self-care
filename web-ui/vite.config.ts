import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Config from "./src/config"

export default defineConfig({
  plugins: [react()],
  server: {
    port: Config.frontendPort,
    strictPort: true
  }
})
