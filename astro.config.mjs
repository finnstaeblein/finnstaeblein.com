// @ts-check
import { defineConfig } from 'astro/config';
import rehypeTightLists from './src/rehype-tight-lists.mjs';
import blankLinesIntegration from './src/integration-blank-lines.mjs';

export default defineConfig({
  site: 'https://finnstaeblein.com',
  integrations: [blankLinesIntegration()],
  markdown: {
    rehypePlugins: [rehypeTightLists],
  },
});
