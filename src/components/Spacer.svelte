<script lang="ts">
type sizes = {
	sm: string
	md: string
	lg: string
}

export let size: keyof sizes = "md"

const marginSize: sizes = {
	sm: "12px",
	md: "24px",
	lg: "48px",
}
</script>

<br style="margin-bottom: {marginSize[size]}" />
