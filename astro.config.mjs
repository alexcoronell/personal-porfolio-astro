import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://alexcoronell.dev/",
  integrations: [
    tailwind({
      nesting: true,
      applyBaseStyles: false,
    }),
    svelte(),
    preact(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: "server",
  adapter: cloudflare(),
});
