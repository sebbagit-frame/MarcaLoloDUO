// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // El reset base lo controlamos desde el layout para mantener el look editorial.
      applyBaseStyles: true,
    }),
  ],
});
