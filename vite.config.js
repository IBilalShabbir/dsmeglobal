import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    ViteWebfontDownload(),
    chunkSplitPlugin(),
  ],
});
