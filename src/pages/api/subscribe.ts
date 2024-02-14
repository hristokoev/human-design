/*

	Form API endpoint

	TODO: Rate limit and prevent spam

*/

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {

	if (request.headers.get('Content-Type') === 'application/json') {
		const body = await request.json();

		// All fields
		const { email } = body;

		// Required fields: validate required fields
		if (!email) {
			return new Response(JSON.stringify({ error: 'Missing email.' }), { status: 400 });
		}

		// Required fields: validate email format
		const emailRegex = /^\S+@\S+\.\S+$/;
		if (!emailRegex.test(email)) {
			return new Response(JSON.stringify({ error: 'Invalid email format.' }), { status: 400 });
		}

		// Required fields: validate types
		if (typeof email !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid type.' }), { status: 400 });
		}

		const dateAndTimeOfPost = new Date();
		const formattedDateAndTimeOfPost = dateAndTimeOfPost.toLocaleDateString("cs-CZ", {
			day: "numeric",
			month: "long",
			year: "numeric",
			hour: "numeric",
			minute: "numeric",
		});

		// Process and send to Google Sheets
		try {
			await fetch("https://script.google.com/macros/s/" + import.meta.env.GOOGLE_APP_SCRIPT_ID + "/exec", {
				method: "POST",
				body: JSON.stringify({
					action: "addSubscriber",
					dateAndTimeOfPost: formattedDateAndTimeOfPost,
					email,
				}),
				headers: {
					"Content-Type": "application/json",
				}
			});
		} catch {
			return new Response(JSON.stringify({ error: 'Failed to send data.' }), { status: 500 });
		}
		return new Response(JSON.stringify({ message: 'Data sent successfully.' }), { status: 200 });
	}

	// Respond with error if Content-Type is not application/json
	return new Response(null, { status: 400 });

};
