import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  prefetch: true,
  adapter: netlify({
    imageCDN: false,
  }),
});