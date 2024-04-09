import { getTitle } from '@/app/(title)/api/getTitle';

export async function POST(req: Request) {
	const query = await req.json();
	try {
		return Response.json(await getTitle(query));
	} catch (error) {
		throw error;
	}
}
