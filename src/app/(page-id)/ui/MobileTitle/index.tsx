import { BasicMediaSectionMobile } from '@/widgets/BasicMediaSectionMobile/ui';
import { TitleCrewCarousel } from '@/widgets/TitleCrewCarousel';
import styles from './styles.module.scss';
import { getTitle } from '../../api/getTitle';
import { WatchingServices } from '@/entities/WatchingServices';

interface MobileProps {
	id: number;
}

export const MobileTitle = async ({ id }: MobileProps) => {
	const { watchability } = await getTitle(id);
	return (
		<div>
			<BasicMediaSectionMobile id={id} />
			<WatchingServices
				watchability={watchability}
				isMobile={true}
				className={styles.watchingServices}
			/>
			<TitleCrewCarousel
				id={id}
				href='#'
				className={styles.titleCrew}
			/>
			<TitleCrewCarousel
				id={id}
				href='#'
				type='creators'
				className={styles.titleCrew}
			/>
		</div>
	);
};
