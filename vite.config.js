import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* pass your config */
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 86,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 86,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 86,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 86,
      },
      // gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
      cache: false,
      // cacheLocation: undefined,
      exclude: [/Reels_Base_Calistenia\.mp4$/, /react\.svg$/],
    }),
  ],
});
