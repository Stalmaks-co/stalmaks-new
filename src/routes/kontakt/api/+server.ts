import { SECRET } from '$env/static/private';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	
    const req = await request.json();

    console.log(req);
    console.log(SECRET);

    const text = "Działa";


	return new Response(String(text));
};