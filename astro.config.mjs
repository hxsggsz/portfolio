import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en-us',
    locales: ['pt-br', 'en-us'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
      strategy: 'pathname'
    }
  },
  output: 'server',
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
  adapter: vercel()
});