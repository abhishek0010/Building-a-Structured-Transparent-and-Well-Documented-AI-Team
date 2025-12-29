// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mnehmos.github.io',
  base: '/mnehmos.multi-agent.framework',
  vite: {
    plugins: [tailwindcss()]
  }
});
