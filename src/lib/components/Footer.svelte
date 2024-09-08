<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="bg-gray-800 py-8 text-sm text-gray-400">
	<div class="container mx-auto px-4 text-center">
		© {year} The Great Composeby. Made by
		<a href="https://flexicon.dev/">Mike</a>. All rights reserved.
	</div>
</footer>

<style lang="postcss">
	a {
		@apply text-gray-300 hover:text-gray-100 hover:underline;
	}
</style>
