import { stringify } from 'yaml';
import servicesData from '$lib/server/data/services.yml';
import type { Service } from '$lib/types/service.interface';

export function getServicesMap() {
	return servicesData as Record<string, Service>;
}

export function getServices() {
	return Object.entries(servicesData as Record<string, Service>).map(
		([id, service]) =>
			({
				...service,
				id
			}) satisfies Service
	);
}

export type GenerationResult =
	| { compose: string; error?: never }
	| { error: string; compose?: never };

export function generateCompose(
	services: Record<string, Service>,
	requestedServiceIDs: Set<string>
): GenerationResult {
	const invalidServices = [...requestedServiceIDs].filter((id) => !services[id]);
	if (invalidServices.length > 0) {
		return {
			error: `Invalid service(s): ${invalidServices.map((id) => `'${id}'`).join(', ')}`
		};
	}

	let serviceContainers = {};
	for (const id of requestedServiceIDs) {
		serviceContainers = {
			...serviceContainers,
			...services[id].containers
		};
	}

	const compose = stringify({ services: serviceContainers });
	return { compose };
}
