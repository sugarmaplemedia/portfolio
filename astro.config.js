import { defineConfig } from "astro/config"

import svelte from "@astrojs/svelte"
import markdoc from "@astrojs/markdoc"
import autoImport from "unplugin-auto-import/astro"
import iconsResolver from "unplugin-icons/resolver"
import icons from "unplugin-icons/vite"

export default defineConfig({
	site: "https://harrisonbouche.com/",
	integrations: [
		svelte(),
		markdoc(),
		autoImport({
			resolvers: [
				iconsResolver({
					prefix: "Icon",
					extension: "svelte",
				}),
			],
		}),
	],
	vite: {
		plugins: [
			icons({
				compiler: "svelte",
			}),
		],
	},
})
