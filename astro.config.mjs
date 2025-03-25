// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://cacustombuild.com',
  integrations: [mdx(), sitemap(), vue({ appEntrypoint: '/src/pages/_app' }), compress({
    HTML: false,
    JavaScript: false,
    CSS: false,
  })],

  vite: {
    plugins: [tailwindcss()],
  },
});