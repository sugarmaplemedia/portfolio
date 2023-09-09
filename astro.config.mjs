import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	vite: {
		ssr: {
			external: ["svgo"],
		},
	},
	site: "https://harrisonbouche.com/",
})
