import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "./build",
  },

  server: { port: 8000, open: true },

});