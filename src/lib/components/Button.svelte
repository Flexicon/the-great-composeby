<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
	export let href: string | undefined = undefined;
</script>

{#if href && !$$props.disabled}
	<a class={`btn variant-${variant}`} {href} {...$$restProps}>
		<slot />
	</a>
{:else}
	<button class={`btn variant-${variant}`} on:click {...$$restProps}>
		<slot />
	</button>
{/if}

<style lang="postcss">
	.btn {
		@apply inline-flex items-center justify-center whitespace-nowrap;
		@apply h-10 px-4 py-2;
		@apply rounded-md text-sm font-medium transition-colors;
		@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
		@apply disabled:pointer-events-none disabled:opacity-50;
	}

	.btn.variant-primary {
		@apply bg-yellow-500 text-black hover:bg-yellow-600;
	}

	.btn.variant-outline {
		@apply border border-yellow-500 text-yellow-500;
		@apply hover:bg-yellow-500 hover:text-black;
	}
</style>
