import { BasicMediaMovieMobile } from '@/widgets/BasicMediaMovieMobile';
import { FeaturesMoviePage } from '@/widgets/FeaturesMoviePage';
import { TitleCrewCarousel } from '@/widgets/TitleCrewCarousel';

import { ReadMoreTextBlock } from '@/entities/ReadMoreTextBlock';
import { WatchingServices } from '@/entities/WatchingServices';

import { getTitle } from '../../api/getTitle';
import styles from './styles.module.scss';

interface MobileProps {
	id: number;
}

export const MobileTitle = async ({ id }: MobileProps) => {
	const { watchability, shortDescription, description } = await getTitle(id);
	return (
		<div>
			<BasicMediaMovieMobile id={id} />
			<FeaturesMoviePage id={id} />
			{shortDescription && (
				<div className={styles.shortDescription}>{shortDescription}</div>
			)}
			{description && <ReadMoreTextBlock text={description} />}
			<WatchingServices
				watchability={watchability}
				isMobile={true}
				className={styles.watchingServices}
			/>
			<TitleCrewCarousel id={id} href="#" className={styles.titleCrew} />
			<TitleCrewCarousel
				id={id}
				href="#"
				type="creators"
				className={styles.titleCrew}
			/>
		</div>
	);
};
