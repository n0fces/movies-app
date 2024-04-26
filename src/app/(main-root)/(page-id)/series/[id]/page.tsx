import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { BasicMediaMovie } from '@/widgets/BasicMediaMovie';
import { HeaderTitlePage } from '@/widgets/HeaderTitlePage';
import { TableInfoTitle } from '@/widgets/TableInfoTitle';
import { TitleCrew } from '@/widgets/TitleCrew';
import { Metadata } from 'next';
import { getTitle } from '../../api/getTitle';
import { Desktop } from '../../ui/Desktop';
import { MobileTitle } from '../../ui/MobileTitle';
import styles from './styles.module.scss';

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

	return !isMobile ? (
		<Desktop
			basicMediaSection={() => (
				<BasicMediaMovie
					id={params.id}
					className={styles.basicMediaSection}
				/>
			)}
			headerTitle={() => <HeaderTitlePage id={params.id} />}
			tableInfo={() => <TableInfoTitle id={params.id} />}
			sideContent={() => <TitleCrew id={params.id} />}
		/>
	) : (
		<MobileTitle id={params.id} />
	);
}
