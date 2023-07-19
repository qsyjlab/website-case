import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import commonjs from '@rollup/plugin-commonjs';

import { fileURLToPath } from "url";
import { postBuildPlugin } from "../build/plugins/postBuildPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), commonjs(), postBuildPlugin()],
  base: '/website-case/dist/',
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
