import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), robotsTxt(), sitemap(), tailwind()],
  site: "https://harrisonbouche.com",
});
