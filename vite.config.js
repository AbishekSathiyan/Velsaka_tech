import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],

  server: {
    port: 5173,
    proxy: {
      "/api": {
        // ✅ FIX: use actual env value
        target: import.meta.env.VITE_API_BASE_URL,

        changeOrigin: true,
        secure: true,

        configure: (proxy) => {
          proxy.on("error", (err) => {
            console.log("❌ Proxy error:", err.message);
          });

          proxy.on("proxyReq", (proxyReq, req) => {
            console.log("➡️ Request:", req.method, req.url);
          });

          proxy.on("proxyRes", (proxyRes, req) => {
            console.log("⬅️ Response:", proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
});