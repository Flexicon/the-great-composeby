<script lang="ts">
	import ContainerIcon from 'lucide-svelte/icons/container';
	import ZapIcon from 'lucide-svelte/icons/zap';
	import ZapOffIcon from 'lucide-svelte/icons/zap-off';
	import Button from '$lib/components/Button.svelte';
	import ServicesSelector from '$lib/components/ServicesSelector.svelte';
	import type { Service } from '$lib/types/service.interface';
	import type { PageData } from './$types';

	export let data: PageData;
	const { services } = data;

	let selectedServices: string[] = [];

	$: canGenerate = selectedServices.length > 0;
	$: generationURL = `/generate/compose?services=${selectedServices.join(',')}`;

	const onServiceChange = (e: { detail: { service: Service; selected: boolean } }) => {
		const { service, selected } = e.detail;
		if (selected) {
			selectedServices = [...selectedServices, service.id];
		} else {
			selectedServices = selectedServices.filter((name) => name !== service.id);
		}
	};
</script>

<svelte:head>
	<title>Generate your Compose file - TGC</title>
</svelte:head>

<section class="container mx-auto py-10">
	<h1 class="flex items-center space-x-2 text-3xl font-semibold">
		<ContainerIcon class="h-[1em] w-[1em] mr-1" />
		<span>Pick the services you need</span>
	</h1>

	<div class="max-w-3xl mt-6">
		<div>
			<ServicesSelector {services} on:change={onServiceChange} />
		</div>

		<div class="flex space-x-2 mt-4">
			<Button
				href={generationURL}
				disabled={!canGenerate}
				variant={canGenerate ? 'primary' : 'outline'}
			>
				{#if canGenerate}
					<ZapIcon class="h-[1em] w-[1em] mr-1" />
					Generate Compose file
				{:else}
					<ZapOffIcon class="h-[1em] w-[1em] mr-1" />
					Nothing to generate
				{/if}
			</Button>
			<Button href="/cli" variant="outline">Get the CLI</Button>
		</div>
	</div>
</section>
