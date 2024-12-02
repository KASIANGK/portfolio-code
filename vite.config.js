import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs/promises';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-code/',  // Remplace "portfolio" par ton nom de dépôt
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
});
