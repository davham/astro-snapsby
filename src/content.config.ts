import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const gallery = defineCollection({
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

// New Blog Collection definition
const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: () =>
		z.object({
			title: z.string(),
			pubDate: z.coerce.date(),
			description: z.string(),
			tags: z.array(z.string()).optional(),
		}),
})

export const collections = { gallery, blog }
