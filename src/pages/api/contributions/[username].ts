import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
	const { username } = params;

	if (!username) {
		return new Response(JSON.stringify({ error: 'Username is required' }), {
			status: 400,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	try {
		const response = await fetch(`https://github.com/${username}.contribs`);
		
		if (!response.ok) {
			return new Response(JSON.stringify({ error: `User ${username} not found` }), {
				status: response.status,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}

		const data = await response.json();

		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch contributions' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
};
