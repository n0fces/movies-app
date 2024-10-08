import { clsx } from 'clsx';

import { canWatchInKP } from '@/shared/helpers/canWatchInKP';
import { Watchability } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';
import { Title } from '@/shared/ui/Title';

import { ServicesList } from '../ServicesList';
import styles from './styles.module.scss';

interface WatchingServicesDetailsProps {
	className?: string;
	watchability: Watchability;
	isMobile: boolean;
}

export const WatchingServicesDetails = ({
	className,
	watchability,
	isMobile,
}: WatchingServicesDetailsProps) => {
	const isKP = canWatchInKP(watchability);

	return (
		<>
			<style>
				{`.${styles.servicesListWrapper} {
					--details-content-max-height: ${
						watchability.items?.length
							? Math.ceil(watchability.items?.length / 2) * 32 +
								Math.floor(watchability.items?.length / 2) * 12
							: 800
					}px
				}`}
			</style>
			<details
				open={!isKP}
				className={clsx(styles.watchingServicesDetails, className)}>
				<summary className={styles.servicesSummary} aria-details="services">
					<Title size="small" as="h3">
						{isKP ? 'Где еще посмотреть' : 'Где смотреть'}
					</Title>
					<span className={styles.iconWrapper}>
						<Icon name="arrow-summary" className={styles.iconArrow} />
					</span>
				</summary>
			</details>
			<ServicesList
				className={styles.servicesListWrapper}
				id="services"
				isMobile={isMobile}
				watchability={watchability}
			/>
		</>
	);
};
