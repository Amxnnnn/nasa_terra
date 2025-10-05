import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // HTTPS disabled due to missing cert files, enable manually if certs are available
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, "certs/key.pem")),
    //   cert: fs.readFileSync(path.resolve(__dirname, "certs/cert.pem")),
    // },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
