import { defineMarkdocConfig, component } from "@astrojs/markdoc/config"

export default defineMarkdocConfig({
	id: "harrisonbouche.com",
	path: "src/content",
	schema: {
		path: "docs/dist/schema.js",
		type: "node",
		property: "default",
		watch: true,
	},
	routing: {
		frontmatter: "route",
	},
	tags: {
		GalleryStatic: {
			render: component("./src/components/GalleryStatic.astro"),
			attributes: {
				// Markdoc requires type defs for each attribute.
				// These should mirror the `Props` type of the component
				// you are rendering.
				// See Markdoc's documentation on defining attributes
				// https://markdoc.dev/docs/attributes#defining-attributes
				dbListName: { type: "Object" },
				size: { type: "String" },
				tag: { type: "String" },
				count: { type: "Number" },
			},
		},
	},
})
