<script lang="ts">
	import { onMount } from "svelte"

	export let galleryJson: string
	export let galleryName: string

	type picture = {
		source: string
		alt: string
		caption: string
	}

	// Get supplied picture array
	let picturesArr: Array<picture> = []

	onMount(() => {
		fetch(`${galleryJson}/gallery.json`)
			.then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					throw new Error("status " + response.status)
				}
			})
			.then((json) => {
				picturesArr = [...json[galleryName]]
			})
	})

	// TODO: create lightbox to view images
	// const galleryArr = [...document.getElementsByClassName("picture")];
	// for(const picture of galleryArr) {
	//     picture.addEventListener("click", () => {
	//         console.log(galleryArr.indexOf(picture)); // use this to switch between images, eventually
	//     })
	// };
</script>

<div>
	<div class="pictures-box">
		{#each picturesArr as image}
			<div
				class="picture {picturesArr.length == 1
					? 'pictures-length1'
					: picturesArr.length == 2
					? 'pictures-length2'
					: picturesArr.length == 3
					? 'pictures-length3'
					: 'pictures-length4plus'}"
				style={`background-image: url(${image.source})`}
				title={image.alt}
			/>
		{/each}
	</div>
	{#if picturesArr.length == 1}
		<p class="txt-sml txt-wi txt-alc" style="margin-bottom: 1rem">
			{picturesArr[0].caption}
		</p>
	{/if}
</div>

<style>
	.pictures-box {
		aspect-ratio: 16 / 9;
		margin: 18px 0;

		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
		gap: 12px;
	}

	.picture {
		background-size: cover;
		background-position: center;
		border-radius: 12px;
		box-shadow: 0 3px 9px var(--clr-tan-tertiary);
		cursor: pointer;

		transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.picture:hover {
		transform: translateY(-3px);
		box-shadow: 0 9px 15px var(--clr-tan-tertiary);
	}

	.pictures-length1 {
		grid-area: 1 / 1 / 7 / 7;
	}

	.pictures-length2:nth-of-type(1) {
		grid-area: 1 / 1 / 7 / 4;
	}
	.pictures-length2:nth-of-type(2) {
		grid-area: 1 / 4 / 7 / 7;
	}

	.pictures-length3:nth-of-type(1) {
		grid-area: 1 / 1 / 7 / 5;
	}
	.pictures-length3:nth-of-type(2) {
		grid-area: 1 / 5 / 4 / 7;
	}
	.pictures-length3:nth-of-type(3) {
		grid-area: 4 / 5 / 7 / 7;
	}

	.pictures-length4plus:nth-of-type(1) {
		grid-area: 1 / 1 / 7 / 5;
	}
	.pictures-length4plus:nth-of-type(2) {
		grid-area: 1 / 5 / 3 / 7;
	}
	.pictures-length4plus:nth-of-type(3) {
		grid-area: 3 / 5 / 5 / 7;
	}
	.pictures-length4plus:nth-of-type(4) {
		grid-area: 5 / 5 / 7 / 7;
	}
</style>
