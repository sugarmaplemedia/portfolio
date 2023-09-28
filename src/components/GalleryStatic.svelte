<script lang="ts">
const serviceList = {
	wdev: {
		title: "Front End Development",
		icon: IconTablerBrowser,
	},
	wdes: {
		title: "Website Design & UI",
		icon: IconTablerDeviceDesktop,
	},
	da: {
		title: "Digital Management",
		icon: IconTablerCloudComputing,
	},
	dm: {
		title: "Digital Marketing",
		icon: IconTablerMessage2,
	},
	cc: {
		title: "Content Creation",
		icon: IconTablerVideo,
	},
}

type galleryObject = {
	entries: Array<galleryItem>
}

type galleryItem = {
	name: string
	link: string
	tags: Array<string>
	image: string
}

export let database: galleryObject
export let size: string
export let tag: keyof typeof serviceList | "" = ""
export let count

let galleryEntries =
	tag !== ""
		? database.entries.filter((entry) => entry.tags.includes(tag))
		: [...database.entries]

galleryEntries.splice(count)
</script>

<div class="gallery-box">
	{#each galleryEntries as entry (entry.name)}
		<a class="item {size === 'sml' && 'small'}" href={entry.link}>
			<div
				class="image-box"
				style="background-image: url({entry.image})"
			/>
			<div class="text-box">
				<h4 class="title">{entry.name}</h4>
				{#if entry.tags}
					<div class="icons-box">
						{#each entry.tags as service (service)}
							<div
								class="service-icon"
								title={serviceList[service].title}
							>
								<svelte:component
									this={serviceList[service].icon}
								/>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</a>
	{/each}
</div>

<style>
.gallery-box {
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
}

.item {
	width: 27%;
	margin: 3%;

	text-decoration: none;
	color: var(--clr-tan-primary);
}

.image-box {
	padding-top: 100%;

	background-color: var(--clr-tan-secondary);
	background-size: contain;
	border-radius: 6px;

	transition: 0.3s var(--ease-bounce);
	box-shadow: 0 3px 6px var(--clr-tan-tertiary);
}
.item:hover .image-box {
	transform: translateY(-6px) scale(1.03);

	box-shadow: 0 6px 9px var(--clr-tan-tertiary);
}

.text-box {
	margin-top: 6px;
	text-align: center;
}

.title {
	font-size: 1.25rem;
	background-image: var(--main-gradient);
	background-clip: text;

	transition: 0.15s;
}
.item:hover .title {
	color: transparent;
}
.item.small .title {
	font-size: 1rem;
}

.icons-box {
	display: flex;
	gap: 2px;
}

.service-icon {
	transition: 0.2s var(--ease-bounce);
}

.service-icon:hover {
	transform: translateY(3px);
}

@media only screen and (max-width: 1000px) {
	.gallery-box {
		justify-content: center;
	}

	.title {
		font-size: 1rem;
	}
}

@media only screen and (max-width: 650px) {
	.gallery-box {
		width: 90%;
		margin: auto;
	}

	.item {
		width: 170px;
	}
}
</style>
