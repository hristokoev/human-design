import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {

	if (request.headers.get('Content-Type') === 'application/json') {
		const body = await request.json();

		// All fields
		const { firstName, lastName, email, gdpr, phone, experienceWithHumanDesign, service, birthDate, birthTime, birthCountry, birthCity, message } = body;

		/*
		
			Required fields
		
		*/

		// Required fields: validate required fields
		if (!firstName || !lastName || !email || !message || gdpr !== true) {
			return new Response(JSON.stringify({ error: 'Missing required fields or GDPR not checked.' }), { status: 400 });
		}

		// Required fields: validate first and last name length
		if (firstName.length > 25 || lastName.length > 25) {
			return new Response(JSON.stringify({ error: 'First and last name must be less than 25 characters.' }), { status: 400 });
		}

		// Required fields: validate email format
		const emailRegex = /^\S+@\S+\.\S+$/;
		if (!emailRegex.test(email)) {
			return new Response(JSON.stringify({ error: 'Invalid email format.' }), { status: 400 });
		}

		// Required fields: validate message length
		if (message.length > 500) {
			return new Response(JSON.stringify({ error: 'Message must be less than 500 characters.' }), { status: 400 });
		}

		// Required fields: validate types
		if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid type for required fields.' }), { status: 400 });
		}

		// Required fields: validate GDPR type
		if (typeof gdpr !== 'boolean') {
			return new Response(JSON.stringify({ error: 'Invalid type for GDPR.' }), { status: 400 });
		}

		/*
		
			Optional fields
		
		*/

		// Optional fields: validate phone type
		if (phone && typeof phone !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid type for phone.' }), { status: 400 });
		}

		// Optional fields: validate phone length
		if (phone && phone.length > 20) {
			return new Response(JSON.stringify({ error: 'Phone number must be less than 20 characters.' }), { status: 400 });
		}

		// Optional fields: validate required fields if service is selected other than 'Jiné'
		if (service && service !== 'Jiné' && (!experienceWithHumanDesign || !birthDate || !birthTime || !birthCountry || !birthCity)) {
			return new Response(JSON.stringify({ error: 'Missing birth information for selected service.' }), { status: 400 });
		}

		// Optional fields: validate service type
		if (service && typeof service !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid type for service.' }), { status: 400 });
		}

		// Optional fields: validate experienceWithHumanDesign type
		if (typeof experienceWithHumanDesign !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid type for experienceWithHumanDesign.' }), { status: 400 });
		}

		// Optional fields: validate birthDate type
		if (birthDate && typeof birthDate !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid type for birthDate.' }), { status: 400 });
		}

		// Optional fields: validate birthTime type
		if (birthTime && typeof birthTime !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid type for birthTime.' }), { status: 400 });
		}

		// Optional fields: validate birthCountry type
		if (birthCountry && typeof birthCountry !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid type for birthCountry.' }), { status: 400 });
		}

		// Optional fields: validate birthCity type
		if (birthCity && typeof birthCity !== 'string') {
			return new Response(JSON.stringify({ error: 'Invalid type for birthCity.' }), { status: 400 });
		}

		// Process and respond
		try {
			await fetch(import.meta.env.COCKPIT_REST_URL + "/content/item/orders", {
				method: "POST",
				body: JSON.stringify({
					data: {
						firstName,
						lastName,
						email,
						phone,
						experienceWithHumanDesign,
						service,
						birthDate,
						birthTime,
						birthCountry,
						birthCity,
						message,
					}
				}),
				headers: {
					"Content-Type": "application/json",
					"api-key": import.meta.env.COCKPIT_API_KEY,
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
