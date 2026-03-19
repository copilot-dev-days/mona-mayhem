import type { APIRoute } from 'astro';

export const prerender = false;

// TODO: Implement the GET handler for fetching GitHub contribution data
// Endpoint: https://github.com/{username}.contribs
export const GET: APIRoute = async ({ params }) => {
	return new Response(JSON.stringify({ error: 'Not implemented' }), {
		status: 501,
		headers: { 'Content-Type': 'application/json' },
	});
};
