import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['book', 'movie', 'article', 'video', 'paper']),
    quality: z.number().min(1).max(10).optional(),
    significance: z.number().min(1).max(10).optional(),
    creator: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    cover: z.string().optional(),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const lattice = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lattice' }),
  schema: z.object({
    title: z.string(),
    theme: z.enum(['tech', 'strategy', 'gtm', 'epistemics']),
    summary: z.string(),
    source: z.string().optional(),
    tags: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const thoughts = defineCollection({
  loader: glob({ pattern: 'thoughts.md', base: './src/content' }),
  schema: z.object({}),
});

export const collections = { notes, lattice, thoughts };
