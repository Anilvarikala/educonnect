// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({
      // The URL of your site (change this to your actual website URL)
      siteUrl: 'https://educonnect2006.vercel.app',
      // Optional: change the output path and filename for the sitemap
      outDir: 'dist',
      outFile: 'sitemap.xml',
    }),
  ],
})