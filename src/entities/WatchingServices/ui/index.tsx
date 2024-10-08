import { Watchability } from '@/shared/types';

import { WatchingServicesDetails } from './ui/WatchingServicesDetails';
import { WatchingServicesMobile } from './ui/WatchingServicesMobile';

interface WatchingServicesProps {
	className?: string;
	isMobile: boolean;
	watchability?: Watchability;
}

export const WatchingServices = async ({
	className,
	isMobile,
	watchability,
}: WatchingServicesProps) => {
	return watchability?.items?.length ? (
		<div className={className}>
			{isMobile ? (
				<WatchingServicesMobile
					isMobile={isMobile}
					watchability={watchability}
				/>
			) : (
				<WatchingServicesDetails
					isMobile={isMobile}
					watchability={watchability}
				/>
			)}
		</div>
	) : null;
};
