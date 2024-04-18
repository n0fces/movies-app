import { Desktop } from '@/app/(page-id)/ui/Desktop';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { BasicMediaSection } from '@/widgets/BasicMediaSection';
import { HeaderTitlePage } from '@/widgets/HeaderTitlePage';
import { TableInfoTitle } from '@/widgets/TableInfoTitle';
import { TitleCrew } from '@/widgets/TitleCrew';
import { Metadata } from 'next';
import { getTitle } from '../../api/getTitle';
import { MobileTitle } from '../../ui/MobileTitle';
import styles from './styles.module.scss';

export async function generateMetadata({
	params,
}: {
	params: { id: number };
}): Promise<Metadata> {
	const data = await getTitle(params.id);

	return {
		title: `${data.name}, ${data.year} — Описание, интересные факты — KinoStar`,
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
