import { getSearch } from '@/features/Search/api/getSearch';

export async function POST(req: Request) {
	const query = await req.json() as string;
	try {
		return Response.json(await getSearch(query));
	} catch (error) {
		throw error;
	}
}
