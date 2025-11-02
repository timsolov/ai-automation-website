import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  // Determine base path:
  // - "./" for opening files directly (local file access)
  // - "/" for preview server (local development server)
  // - "/ai-automation-website/" for production deployment
  let base: string;
  if (process.env.VITE_BUILD_LOCAL === "true") {
    base = "./"; // For direct file access
  } else if (process.env.VITE_BUILD_PREVIEW === "true") {
    base = "/"; // For preview server
  } else {
    base = "/ai-automation-website/"; // For production
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    preview: {
      port: 4173,
      host: "localhost",
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    base,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      assetsDir: "assets",
    },
  };
});
