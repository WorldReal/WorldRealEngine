import { defineConfig } from "vite";

// import cesium from "vite-plugin-cesium";
export default defineConfig({
  resolve: {
    alias: [{ find: /^(@?src\/.*)\.js$/, replacement: '$1.ts' }],
  },

  // plugins: [cesium()],
});
