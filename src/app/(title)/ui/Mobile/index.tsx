import { BasicMediaSectionMobile } from '@/widgets/BasicMediaSectionMobile/ui';
import styles from './styles.module.scss';
import { TitleCrewCarousel } from '@/widgets/TitleCrewCarousel';
import { WatchingServices } from '@/entities/WatchingServices';

interface MobileProps {
	id: number;
}

export const Mobile = ({ id }: MobileProps) => {
	return (
		<div>
			<BasicMediaSectionMobile id={id} />
			<WatchingServices
				className={styles.watchingServices}
				id={id}
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
