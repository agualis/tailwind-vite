import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
  },
});
