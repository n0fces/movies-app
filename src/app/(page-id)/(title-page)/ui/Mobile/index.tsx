import { BasicMediaSectionMobile } from '@/widgets/BasicMediaSectionMobile/ui';
import styles from './styles.module.scss';
import { TitleCrewCarousel } from '@/widgets/TitleCrewCarousel';
import { WatchingServices } from '@/entities/WatchingServices';
import { getTitle } from '../../api/getTitle';

interface MobileProps {
	id: number;
}

export const Mobile = async ({ id }: MobileProps) => {
	const { watchability } = await getTitle(id);
	return (
		<div>
			<BasicMediaSectionMobile id={id} />
			<WatchingServices
				className={styles.watchingServices}
				watchability={watchability}
				isMobile={true}
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
