// @ts-check
import { defineConfig } from 'astro/config';
import rehypeTightLists from './src/rehype-tight-lists.mjs';

export default defineConfig({
  site: 'https://finnstaeblein.com',
  markdown: {
    rehypePlugins: [rehypeTightLists],
  },
});
