import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

/**
 * Separate Vite config for building the CSS bundle
 * This creates a complete CSS file with all component styles + all responsive variants
 */
export default defineConfig({
  plugins: [tailwindcss()],
  publicDir: false,
  build: {
    outDir: "dist-css",
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(dirname, "src/index.css"),
    },
  },
});
