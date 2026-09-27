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
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
      allowedHosts: [
        '4321-i47rl56nxnd51rtw531wy.e2b.app',
        '.e2b.app',
        'localhost',
        '127.0.0.1',
      ],
    },
  },
});