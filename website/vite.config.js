import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import commonjs from "@rollup/plugin-commonjs";

import { fileURLToPath } from "url";
import { postBuildPlugin } from "../build/plugins/postBuildPlugin";
import dotenv from "dotenv";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载对应的 .env 文件
  dotenv.config({
    path: path.resolve(__dirname, `.env.${mode}`),
  });

  // 获取环境变量存储在变量中
  const env = process.env;

  console.log('env',env);

  return {
    plugins: [vue(), commonjs(), postBuildPlugin()],
    base: env.VITE_APP_ASSETS_URL,
    envDir: "/",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
  };
});
