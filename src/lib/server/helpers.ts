/**
 * Helper function to create an error Response.
 *
 * @param message The error message
 * @returns The response
 */
export function errorResponse(message: string, status = 400, statusText = 'Bad Request') {
	return new Response(JSON.stringify({ error: message }), {
		status,
		statusText,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store'
		}
	});
}
