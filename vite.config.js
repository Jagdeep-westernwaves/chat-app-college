import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: "localhost",
  },
  plugins: [
    react(),
    svgrPlugin(),
    EnvironmentPlugin("all", { prefix: "REACT_APP_" }),
  ],
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
      stream: "stream-browserify",
    },
  },
  build: {
    commonjsOptions: {
      include: [],
    },
    outDir: "build",
  },
  optimizeDeps: {
    disabled: false,
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
      ],
    },
  },
});
