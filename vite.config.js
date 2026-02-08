import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path';

export default defineConfig({
      plugins: [
    tailwindcss(),
  ],
    // Set base to relative so the project works in any sub-folder
    base: './',

    build: {
        // Generates a manifest for easier WP conversion later
        manifest: true,
        outDir: 'dist',
        assetsDir: 'assets',
        // Ensures small images are not inlined as base64 (ThemeForest prefers files)
        assetsInlineLimit: 0,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
                functionalities: resolve(__dirname, 'functionalities.html'),
                record: resolve(__dirname, 'record.html'),
                value: resolve(__dirname, 'value.html'),

            },
            output: {
                // Clean file names for buyers to understand
                entryFileNames: `assets/js/[name].js`,
                chunkFileNames: `assets/js/[name].js`,
                assetFileNames: `assets/[ext]/[name].[ext]`,
            },
        },
        // Minification settings
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Professional requirement
                drop_debugger: true,
            },
        },
    },
    server: {
        port: 3000,
    },
});