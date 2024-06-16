import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), tailwind(), sitemap()],
  output: 'server',
  site: "https://astro-coffee.onrender.com",
  adapter: node({
    mode: "standalone"
  })
});