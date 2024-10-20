<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Service } from '$lib/types/service.interface';
	import ServiceToggle from './ServiceToggle.svelte';

	const dispatch = createEventDispatcher();

	export let services: Service[];
</script>

<div class="flex gap-3 flex-wrap">
	{#each services as service}
		<ServiceToggle
			class="w-24 h-24"
			{service}
			on:change={(e) => dispatch('change', { service, selected: e.detail })}
		/>
	{/each}
</div>
