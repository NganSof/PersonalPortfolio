import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";
// https://vite.dev/config/
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      // external: ["prop-types"],
    },
    outDir: "dist",
    chunkSizeWarningLimit: 1000,
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
