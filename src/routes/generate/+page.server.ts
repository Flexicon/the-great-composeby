import { getServices } from '$lib/server/data/services';
import type { PageServerLoad } from './$types';

const services = getServices();

export const load = (async () => {
	return { services };
}) satisfies PageServerLoad;
