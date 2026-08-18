import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "/tangy/",
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "https://tangy-api.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
