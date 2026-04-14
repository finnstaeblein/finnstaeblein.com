// @ts-check
import { defineConfig } from 'astro/config';
import remarkBlankLines from './src/remark-blank-lines.mjs';

export default defineConfig({
  site: 'https://finnstaeblein.com',
  markdown: {
    remarkPlugins: [remarkBlankLines],
  },
});
