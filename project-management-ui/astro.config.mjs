import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: 'https://taskflow.ai',
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
});