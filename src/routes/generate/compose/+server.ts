import { generateCompose, getServicesMap } from '$lib/server/data/services';
import { errorResponse } from '$lib/server/helpers';
import type { RequestHandler } from './$types';

const services = getServicesMap();

export const GET = (async ({ request }) => {
	const url = new URL(request.url);
	const servicesParam = url.searchParams.get('services');
	if (!servicesParam) {
		return errorResponse('Missing services parameter');
	}

	const requestedServices = new Set(servicesParam.split(','));
	const { compose, error } = generateCompose(services, requestedServices);
	if (error !== undefined) {
		return errorResponse(error);
	}

	return new Response(compose, {
		headers: {
			'Content-Type': 'text/yaml',
			'Content-Disposition': 'attachment; filename="compose.yml"'
		}
	});
}) satisfies RequestHandler;
