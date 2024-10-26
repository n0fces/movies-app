import { getTitle } from '../../(page-id)/api/getTitle';

export async function POST(req: Request) {
	const query = await req.json() as string;
	try {
		return Response.json(await getTitle(Number(query)));
	} catch (error) {
		throw error;
	}
}
