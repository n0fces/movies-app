import { Metadata } from 'next';
import { getTitle } from '../../api/getTitle';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { Desktop } from '../../ui/Desktop';
import { Mobile } from '../../ui/Mobile';

export async function generateMetadata({
	params,
}: {
	params: { id: number };
}): Promise<Metadata> {
	const data = await getTitle(params.id);

	return {
		title: `${data.name}, (сериал, 1-${data.seasonsInfo?.length} сезоны, все серии), ${data.releaseYears?.[0].start}-${data.releaseYears?.[0].end} — Описание, интересные факты — KinoStar`,
		description: data.description,
	};
}

export default async function TitleRoot({
	params,
}: {
	params: { id: number };
}) {
	const isMobile = deviceDetectServer();

	return !isMobile ? <Desktop id={params.id} /> : <Mobile id={params.id} />;
}