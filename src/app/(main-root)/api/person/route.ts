import { getPerson } from '@/features/LinkItemPopover/api/getPerson';

export async function POST(req: Request) {
	const query = await req.json();
	try {
		return Response.json(await getPerson(query));
	} catch (error) {
		throw error;
	}
}
