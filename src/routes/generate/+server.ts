import { stringify } from 'yaml';
import { getServicesMap } from '$lib/server/data/services';
import type { RequestHandler } from './$types';

const services = getServicesMap();

interface RequestBody {
	services?: string[];
}

export const POST = (async ({ request }) => {
	if (request.headers.get('Content-Type') !== 'application/json') {
		return errorResponse('Invalid Content-Type');
	}

	const body: RequestBody = await request.json();
	if (!body.services || typeof body.services !== 'object' || !Array.isArray(body.services)) {
		return errorResponse('Invalid payload');
	}

	const requestedServiceIDs = new Set(body.services);

	const invalidServices = [...requestedServiceIDs].filter((id) => !services[id]);
	if (invalidServices.length > 0) {
		return errorResponse(
			`Invalid service(s): ${invalidServices.map((id) => `'${id}'`).join(', ')}`
		);
	}

	let serviceContainers = {};
	for (const id of requestedServiceIDs) {
		serviceContainers = {
			...serviceContainers,
			...services[id].containers
		};
	}
	const compose = stringify({ services: serviceContainers });

	return new Response(compose, {
		headers: {
			'Content-Type': 'text/yaml',
			'Content-Disposition': 'attachment; filename="compose.yml"'
		}
	});
}) satisfies RequestHandler;

/**
 * Helper function to create a 400 Bad Request JSON response.
 *
 * @param message The error message
 * @returns The response
 */
function errorResponse(message: string) {
	return new Response(JSON.stringify({ error: message }), {
		status: 400,
		statusText: 'Bad Request',
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store'
		}
	});
}
