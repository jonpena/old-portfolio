import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        status: "./404.html",
      },
    },
  },
});
