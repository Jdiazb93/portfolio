import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "@layout",
        replacement: path.resolve(__dirname, "./src/layout"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@interfaces",
        replacement: path.resolve(__dirname, "./src/interfaces"),
      },
      {
        find: "@helper",
        replacement: path.resolve(__dirname, "./src/helper"),
      },
    ],
  },
});
