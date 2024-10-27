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
