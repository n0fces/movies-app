import { Metadata } from 'next';

// * здесь надо подумать еще над тем, выносить ли это в паблик апи или нет. по методолгии получается надо, но очково из-за раздувания бандла
import { getCategory } from '@/widgets/CategoryDescription/api/getCategory';
import { ListItems } from '@/widgets/ListItems';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

interface Props {
	params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { name } = await getCategory(params.slug);

	return {
		title: `${name} — KinoStar`,
	};
}

export default async function ListTitles({
	params,
	searchParams,
}: {
	params: { [key: string]: string };
	searchParams: { [key: string]: string };
}) {
	const isMobile = deviceDetectServer();

	const limit = isMobile ? 25 : 50;

	return (
		<ListItems params={params} searchParams={searchParams} limit={limit} />
		// <></>
	);
}
