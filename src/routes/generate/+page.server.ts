import services from '$lib/server/data/services.yml';
import type { Service } from '$lib/types/service.interface';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return { services: services as Service[] };
}) satisfies PageServerLoad;
