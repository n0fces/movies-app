'use client';

import { canWatchInKP } from '@/shared/helpers/canWatchInKP/canWatchInKP';
import { Watchability } from '@/shared/types';
import { Title } from '@/shared/ui/Title';

import { MoreServicesBtn } from '../MoreServicesBtn';
import { ServicesList } from '../ServicesList';
import styles from './styles.module.scss';

interface WatchingServicesMobileProps {
	className?: string;
	watchability: Watchability;
	isMobile: boolean;
}

export const WatchingServicesMobile = ({
	className,
	watchability,
	isMobile,
}: WatchingServicesMobileProps) => {
	const isKP = canWatchInKP(watchability);
	const amountServices = watchability.items?.length ?? 0;

	return (
		<div className={className}>
			<div className={styles.servicesHeader}>
				<Title size="small" as="h3">
					{isKP ? 'Где еще посмотреть' : 'Где смотреть'}
				</Title>
				{amountServices - 1 > 3 && (
					<MoreServicesBtn
						isMobile={isMobile}
						watchability={watchability}
						amountServices={isKP ? amountServices - 1 : amountServices}
					/>
				)}
			</div>
			<ServicesList
				isMobile={isMobile}
				amountServices={3}
				watchability={watchability}
			/>
		</div>
	);
};
