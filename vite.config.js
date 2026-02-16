import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss()],
  base: './',

  build: {
    manifest: true,
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 0,
    minify: false, // Keep custom JS readable

    rollupOptions: {
      // Multiple entry points for HTML + JS modules
      input: {
        // HTML pages
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        functionalities: resolve(__dirname, 'functionalities.html'),
        record: resolve(__dirname, 'record.html'),
        value: resolve(__dirname, 'value.html'),

        'custom-logic': resolve(__dirname, 'src/js/main.js'),
        'slider-init': resolve(__dirname, 'src/js/modules/slider.js'),
      },
      output: {
        // Keep readable & clean filenames for buyers
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: 'assets/[ext]/[name].[ext]',

        // Separate vendor chunk (locked)
        manualChunks: {
          vendor: ['alpinejs', '@alpinejs/collapse', 'gsap', 'lenis', 'swiper'],
        },
      },
    },

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  server: {
    port: 3000,
  },
});
