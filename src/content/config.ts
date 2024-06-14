// @ts-ignore
import { defineCollection, z } from 'astro:content';

const cards = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    price: z.number(),
  }),
});

export const collections = { cards };
