import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // Allows to import button-options from TS vue components
      'button-options': resolve(
        __dirname,
        './src/components/button-options'
      ),
    },
  },
  optimizeDeps: {
    include: [
      'button-options',
    ],
  },
  build: {
    rollupOptions: {
      plugins: [
        process.env.BUILD_ANALIZE
          ? visualizer({
              open: true,
              template: 'treemap',
              brotliSize: true,
              gzipSize: true,
              filename: './stats.html',
            })
          : null,
      ],
    },
    commonjsOptions: {
      // Allows to import button-options from tailwind commonJS setup
      include: [
        'src/components/button-options.js',
      ],
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
