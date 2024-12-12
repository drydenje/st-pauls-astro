import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // adding to remove error message "legacy JS API is depreceated"
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          importers: [],
        },
      },
    },
  },
});
