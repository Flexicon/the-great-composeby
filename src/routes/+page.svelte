<script lang="ts">
	import Wine from 'lucide-svelte/icons/wine';
</script>

<section class="container mx-auto px-4 py-20 text-center">
	<h1 class="text-5xl md:text-7xl max-w-3xl mx-auto font-bold mb-8 font-playfair-display">
		Compose your local stack in <span class="text-yellow-500">Style</span>
	</h1>

	<p class="text-xl mb-3 max-w-xl mx-auto">
		From Postgres to LocalStack, our tool
		<span class="text-yellow-500">simplifies your workflow</span> so you can sit back and enjoy the glitz
		and glamour of the limelight.
	</p>

	<p class="text-xl mb-3 max-w-xl mx-auto">
		Turn your dev stack into a masterpiece — crafted with ease, deployed with
		<span class="text-yellow-500">style</span>.
	</p>

	<p class="text-xl mb-8 max-w-xl mx-auto">
		Never scour the web on how to set up a <span class="text-yellow-500">Redis</span> container again
		— let our tool set up the essentials so you can focus on the main act.
	</p>

	<div class="flex justify-center space-x-4">
		<button
			class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-yellow-500 text-black hover:bg-yellow-600"
		>
			<Wine class="h-[1em] w-[1em] mr-1" />
			Try it out!
		</button>
		<button
			class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
		>
			Get the CLI
		</button>
	</div>
</section>
