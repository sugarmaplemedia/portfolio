<script lang="ts">
	import Icon from "@iconify/svelte"
	import { onMount } from "svelte"

	// Visual settings
	export let type: "arrow left" | "arrow right" | "button" = "button"
	export let mode: "light" | "dark" = "light"
	export let important: boolean = false

	// Link settings
	export let href: string | undefined = undefined
	export let newTab: boolean = false
	export let ariaLabel: string | undefined = undefined

	export let clickHandler: (() => void) | undefined = undefined
</script>

{#if !href}
	<button
		on:click={clickHandler}
		class="button {important ? 'important' : mode}"
		aria-label={ariaLabel}
	>
		<slot />
	</button>
{:else if type === "button"}
	<a
		class="button {important ? 'important' : mode}"
		{href}
		target={newTab ? "_blank" : "_self"}
		aria-label={ariaLabel}
	>
		<slot />
	</a>
{:else if type.includes("arrow")}
	<a
		class="button arrow {type === 'arrow left'
			? 'arrow-right'
			: 'arrow-right'}"
		{href}
		target={newTab ? "_blank" : "_self"}
		aria-label={ariaLabel}
	>
		<Icon
			class="arrow-icon"
			icon={`tabler:${
				type === "arrow left" ? "arrow-left" : "arrow-right"
			}`}
		/>
		<slot />
	</a>
{/if}

<style>
	.button {
		margin: 12px 0;
		padding: 12px 18px;

		display: inline-block;

		font-weight: bold;
		text-decoration: none;
		text-transform: lowercase;

		border-radius: 12px;

		cursor: pointer;

		transition: 0.1s;
	}
	.button:hover {
		transform: translateY(3px);
	}

	.light {
		color: var(--clr-tan-primary);

		background-color: var(--clr-tan-tertiary);
		border: 2px solid var(--clr-tan-secondary);
		box-shadow: 0 3px 6px var(--clr-tan-tertiary);
	}
	.light:hover {
		border-color: var(--clr-tan-primary);
		background-color: var(--clr-tan-secondary);
		box-shadow: 0 1px 3px var(--clr-tan-secondary);
	}

	.important {
		color: var(--clr-tan-primary);

		background-image: var(--main-gradient-btn);
		box-shadow: 0 3px 6px var(--clr-tan-secondary);
	}
	.important:hover {
		border-color: var(--clr-pred-light);
		box-shadow: 0 1px 3px var(--clr-tan-secondary);
	}

	.arrow {
		display: inline-flex !important;
		justify-content: center;
		align-items: center;
		gap: 9px;

		font-size: 1.2rem;
		color: var(--clr-tan-primary);
	}

	.arrow-right {
		flex-direction: row-reverse;
		float: right;
	}

	.arrow-icon {
		font-size: 1.8rem;
	}
</style>
