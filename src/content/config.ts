import { z, defineCollection } from "astro:content"

const portfolioCollection = defineCollection({
	type: "content",
	schema: z.object({
		id: z.number(),
		name: z.string(),
		source: z.string().url(),
		tags: z.array(z.string()),
	}),
})

export const collections = {
	portfolio: portfolioCollection,
}
