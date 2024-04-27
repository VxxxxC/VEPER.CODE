import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  devToolbar: {
    enabled: true,
  },
  site: "https://example.com",
  integrations: [sitemap(), react(), tailwind()],
});
