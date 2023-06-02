/** @format */
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
import ViteEslintPlugin from "vite-plugin-eslint";

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  build: { cssCodeSplit: true },
  css: { preprocessorOptions: { less: { javascriptEnabled: true } } },
  plugins: [
    vue(),
    Components({ resolvers: [NaiveUiResolver()] }),
    Unocss(),
    ViteEslintPlugin(),
  ],
  resolve: {
    alias: {
      "@": resolve("./src/"),
      "@views": resolve("./src/views/"),
      "@components": resolve("./src/components/"),
      "@layouts": resolve("./src/layouts/"),
      "@stores": resolve("./src/stores/"),
      "@services": resolve("./src/services/"),
      "@helps": resolve("./src/helps/"),
      "@events": resolve("./src/events/"),
      "@constants": resolve("./src/constants/"),
      "@styles": resolve("./src/styles/"),
    },
  },
  server: {
    // host: "emes.local.com",
    port: 9999,
    open: true,
    // proxy: {
    //   "/api": {
    //     target: "",
    //     changeOrigin: true,
    //   },
    // },
  },
});
