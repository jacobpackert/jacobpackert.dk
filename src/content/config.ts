import { z, defineCollection } from 'astro:content';

const blogSchema =
  z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    id: z.number().int(),
  });

// Define collection and schema validation for blog
const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema
 });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};