<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
</script>

<button class={`variant-${variant}`} {...$$restProps}>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply inline-flex items-center justify-center whitespace-nowrap;
		@apply h-10 px-4 py-2;
		@apply rounded-md text-sm font-medium transition-colors;
		@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
		@apply disabled:pointer-events-none disabled:opacity-50;
	}

	button.variant-primary {
		@apply bg-yellow-500 text-black hover:bg-yellow-600;
	}

	button.variant-outline {
		@apply border border-yellow-500 text-yellow-500;
		@apply hover:bg-yellow-500 hover:text-black;
	}
</style>
