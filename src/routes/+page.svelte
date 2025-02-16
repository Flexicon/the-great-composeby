<script lang="ts">
	import Wine from 'lucide-svelte/icons/wine';

	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>The Great Composeby</title>
</svelte:head>

<section class="container mx-auto px-4 py-20 text-center">
	<h1 class="text-5xl md:text-7xl max-w-3xl mx-auto font-bold mb-8 font-playfair-display">
		Compose your local stack in <span class="highlight">Style</span>
	</h1>

	<p class="text-xl mb-3 max-w-xl mx-auto">
		From Postgres to Kafka, streamline your local development environment and get up and running in
		minutes.
	</p>

	<p class="text-xl mb-8 max-w-xl mx-auto">
		Never scour the web on how to set up a Redis container again — let
		<span class="highlight">The Great Composeby</span> set up the essentials so you can focus on the
		main act.
	</p>

	<div class="flex justify-center space-x-4">
		<Button href="/generate">
			<Wine class="h-[1em] w-[1em] mr-1" />
			Start Composing
		</Button>
		<Button href="/cli" variant="outline">Get the CLI</Button>
	</div>
</section>

<style lang="postcss">
	.highlight {
		@apply text-yellow-500;
	}
</style>
