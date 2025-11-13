import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://avayedawadi.github.io',
  base: '/LMC-MP3',
  output: 'static',
  build: {
    format: 'file'
  }
});
