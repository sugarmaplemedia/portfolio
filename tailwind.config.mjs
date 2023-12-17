/** @type {import('tailwindcss').Config} */

const primary = "#534935"
const secondary = "#D3C7B6"
const tertiary = " #EEE7DD"
const bg = "#F6F3EE"

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary,
				secondary,
				tertiary,
				bg,
				"pred-primary": "#ffed00",
				"pred-dark": "#63271c",
				"pred-light": "#c88447",
			},
			transitionTimingFunction: {
				"ease-bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
			},
			dropShadow: {
				input: `0 3px 6px ${bg}`,
				"input-focused": `0 3px 6px ${secondary}`,
			},
		},
	},
	plugins: [],
}
