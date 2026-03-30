import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['book', 'movie', 'article', 'video']),
    rating: z.number().min(1).max(10).optional(),
    creator: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    cover: z.string().optional(),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    repo: z.string().url().optional(),
    link: z.string().url().optional(),
    image: z.string().optional(),
    stack: z.array(z.string()).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, projects };
