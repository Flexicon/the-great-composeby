<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Service } from '$lib/types/service.interface';

	const dispatch = createEventDispatcher();

	export let service: Service;
	export let selected: boolean = false;
</script>

<label
	class={`flex flex-col items-center justify-center py-2 px-3 bg-gray-800 rounded-md cursor-pointer ${$$props.class || ''}`}
	class:opacity-50={!selected}
	class:grayscale={!selected}
>
	<input
		class="hidden"
		type="checkbox"
		bind:checked={selected}
		on:change={(e) => dispatch('change', e.currentTarget.checked)}
	/>
	<img src={`/logos/${service.id}.svg`} alt={service.name} class="h-14 w-auto" />
	<span class="text-xs mt-1">{service.name}</span>
</label>
