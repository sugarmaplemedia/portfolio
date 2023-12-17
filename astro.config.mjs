import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import robotsTxt from 'astro-robots-txt';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), robotsTxt(), sitemap()],
  site: "https://harrisonbouche.com"
});