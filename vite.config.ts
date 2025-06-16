
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
        watch: {
      usePolling: true,
      interval: 100 // You can tweak this — lower = faster but more CPU
    },
    host: true, // required to access via Windows browser (optional)
    // host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // 🚧 REMOVE THE PLUGIN THAT MAY BE BREAKING react-three-fiber
    // mode === 'development' &&
    // componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
