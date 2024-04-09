import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { HTMLAttributes } from 'react';
import { WatchingService } from '../WatchingService';
import { Watchability } from '@/shared/types';

interface ServicesListProps extends HTMLAttributes<HTMLUListElement> {
	className?: string;
	watchability: Watchability;
	isMobile: boolean;
	amountServices?: number;
}

export const ServicesList = ({
	className,
	isMobile,
	watchability,
	amountServices,
}: ServicesListProps) => {
	const watchabilityList = amountServices
		? watchability.items
				?.filter((item) => item.name !== 'Kinopoisk HD')
				.slice(0, amountServices)
		: watchability.items?.filter((item) => item.name !== 'Kinopoisk HD');

	return (
		<ul
			className={clsx(className, {
				[styles.servicesList]: isMobile,
				[styles.servicesListFull]: !isMobile,
			})}>
			{watchabilityList?.map((item) => (
				<WatchingService
					className={styles.watchingServiceWrapper}
					isMobile={isMobile}
					key={item.name}
					{...item}
				/>
			))}
		</ul>
	);
};
