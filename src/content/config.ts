import { defineCollection, z } from 'astro:content';

const projets = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    objectif: z.string().optional(),
    image: z.string(),
    cover: z.string().optional(),
    gradient: z.string().optional(),
    date: z.date(),
    technos: z.array(z.string()),
    collaborateurs: z.array(
      z.object({
        nom: z.string(),
        lien: z.string().url().optional(),
      })
    ).optional(),
    lien: z.string().url().optional(),
    github: z.string().url().optional(),
    // Hide => not displayed on the website
    statut: z.enum(['En cours', 'Terminé', 'Concept', 'Hide']).default('Terminé'),
  }),
});

export const collections = {
  projets,
};
