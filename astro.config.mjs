import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'; // Adaptador para Vercel

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: "server", // Indica que el proyecto se va a desplegar como servidor
  adapter: vercel(), // Solo este adaptador
  integrations: [react()]
});


