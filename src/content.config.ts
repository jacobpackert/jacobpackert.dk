import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';


const blogSchema =
  z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    id: z.number().int(),
    slug: z.string(),
  });

// Define collection and schema validation for blog
const blogCollection = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: blogSchema
 });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};