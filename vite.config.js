import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup.html'),
        options: resolve(__dirname, 'src/options.html'),
        background: resolve(__dirname, 'src/background.js')
      }
    }
  },
  plugins: [
    react(),
    {
      name: 'copy-manifest',
      buildEnd() {
        // Copy manifest.json to dist directory
        const srcManifestPath = path.resolve(__dirname, 'src/manifest.json');
        const destManifestPath = path.resolve(__dirname, 'dist/manifest.json');
        fs.copyFileSync(srcManifestPath, destManifestPath);
        console.log('Copied manifest.json to dist directory');
      }
    }
  ]
});
