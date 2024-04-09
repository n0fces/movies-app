import { getTitle } from '@/app/(title)/api/getTitle';
import { WatchingServicesDetails } from './ui/WatchingServicesDetails';
import { WatchingServicesMobile } from './ui/WatchingServicesMobile';

interface WatchingServicesProps {
	className?: string;
	isMobile: boolean;
	id: number;
}

export const WatchingServices = async ({
	className,
	isMobile,
	id,
}: WatchingServicesProps) => {
	const { watchability } = await getTitle(id);
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
