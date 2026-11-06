import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://feverdreme.github.io',
  output: 'static',
  build: { format: 'file' },
  devToolbar: { enabled: false },
  vite: {
    server: {
      // Poll so edits are detected when native filesystem events are missed.
      watch: { usePolling: true, interval: 500 },
    },
  },
});
