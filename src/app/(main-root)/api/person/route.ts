import { getPerson } from '@/features/LinkItemPopover/api/getPerson';

// в этих роутах надо подумать, как нормально обрабатывать запросы
export async function POST(req: Request) {
	const query = (await req.json()) as string;
	try {
		return Response.json(await getPerson(Number(query)));
	} catch (error) {
		throw error;
	}
}
