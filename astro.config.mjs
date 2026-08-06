// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://osamamahmood.me',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
