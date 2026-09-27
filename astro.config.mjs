import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sai-gayatri-caterers.vercel.app',
  integrations: [sitemap()],
});
