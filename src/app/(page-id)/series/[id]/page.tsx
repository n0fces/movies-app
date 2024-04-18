import { Desktop } from '@/app/(page-id)/ui/Desktop';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { BasicMediaSection } from '@/widgets/BasicMediaSection';
import { HeaderTitlePage } from '@/widgets/HeaderTitlePage';
import { TableInfoTitle } from '@/widgets/TableInfoTitle';
import { TitleCrew } from '@/widgets/TitleCrew';
import { Metadata } from 'next';
import styles from './styles.module.scss';
import { getTitle } from '../../api/getTitle';
import { MobileTitle } from '../../ui/MobileTitle';

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
				<BasicMediaSection
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
