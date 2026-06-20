import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    platform: z.string(),
    status: z.enum(['PROTOTYPE', 'DEVELOPMENT', 'TESTING', 'PRODUCTION']),
    date: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    featured: z.boolean().default(false),
    model: z.string().optional(),
  }),
});

export const collections = { projects };
