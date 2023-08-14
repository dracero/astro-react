import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte()],
  output: 'server',
  // default is 'dist'
  bundler: 'esbuild' // default is 'esbuild'
  //
  ,

  adapter: vercel()
});