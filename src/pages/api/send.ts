import type { APIRoute } from 'astro';

const RESEND_API_KEY = 're_Dyg1pXYG_PGgEC28TdLyKe6neuXbw9DkS';

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get("Content-Type") === "application/json") {
		const requestData = await request.json();
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${RESEND_API_KEY}`,
			},
			body: JSON.stringify({
				from: 'Human Design <info@humandesignprofirmy.cz>',
				to: ['iamhristokoev@gmail.com'],
				subject: 'Nová zpráva z webu',
				html: requestData.html
			}),
		});
		return new Response(JSON.stringify(await response.json()), { status: 200 });
	}
	return new Response(null, { status: 400 });
}