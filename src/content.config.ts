import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const gallery = defineCollection({
	// Use the glob loader to target Markdown files in src/content/gallery/
	loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			cover: image(),
			alt: z.string(),
			exif: z
				.object({
					camera: z.string().optional(),
					lens: z.string().optional(),
					settings: z.string().optional(),
				})
				.optional(),
		}),
})

export const collections = { gallery }
