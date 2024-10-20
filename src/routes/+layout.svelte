<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '../app.css';
</script>

<div class="flex flex-col min-h-screen bg-gray-900 text-white">
	<Header />
	<main class="flex-1 p-4">
		<slot />
	</main>
	<Footer />
</div>
