// Redirect to google.com

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
	return Response.redirect('https://humandesign-admin.occamy.cz/', 301);
}