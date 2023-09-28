const link = "/portfolio/"

const portfolioEntries = [
	{
		name: "Finlandia Foundation",
		tags: ["wdes", "wdev", "da"],
		source: "https://develop.finlandiafoundation.org",
	},
	{
		name: "Top of the Lake",
		tags: ["wdes", "wdev"],
		source: "https://topofthelake.org",
	},
	{
		name: "Tour Da Yoop, Eh",
		tags: ["wdes", "wdev", "da", "dm", "cc"],
		source: "https://tourdayoopeh.com",
	},
	{
		name: "U.P. Lions Serve",
		tags: ["wdev", "da", "dm", "cc"],
		source: "https://uplionsserve.org",
	},
	{
		name: "NMU: CAMS Dept.",
		tags: ["wdev", "da", "cc"],
		source: "https://nmu.edu/cams",
	},
	{
		name: "harrisonbouche.com",
		tags: ["wdes", "wdev", "da", "cc"],
		source: "https://harrisonbouche.com",
	},
]

String.prototype.toKebabCase = function () {
	return this.toLowerCase().replace(/[^A-Z0-9]/gi, "-")
}

function generateGalleries(entriesArray) {
	return entriesArray.map((entry) => ({
		name: entry.name,
		tags: entry.tags,
		source: entry.source,
		link: `/portfolio/${entry.name.toKebabCase()}`,
		image: `/images/portfolio/${entry.name.toKebabCase()}/_icon.png`,
	}))
}

export default {
	portfolio: {
		entries: generateGalleries(portfolioEntries),
	},
}
