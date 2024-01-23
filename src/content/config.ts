import { defineCollection, z } from "astro:content"

const portfolioCollection = defineCollection({
	type: "content",
	schema: z.object({
		isDraft: z.boolean(),
		isClientWork: z.boolean().optional(),
		hasNoImage: z.boolean().optional(),
		name: z.string(),
		postTitle: z.string().optional(),
		pubDate: z.string().transform((str) => new Date(str)),
		modifyDate: z.date().optional(),
		description: z.string(),
		tags: z.array(z.string()),
		link: z.string().url().optional(),
	}),
})

export const collections = {
	portfolio: portfolioCollection,
}
