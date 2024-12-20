import { ModalTrailer } from '@/features/ModalTrailer';
import { WatchButton } from '@/features/WatchButton';

import { canWatchInKP } from '@/shared/helpers/canWatchInKP/canWatchInKP';
import { ListItemProps } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';

import styles from './styles.module.scss';

interface WatchItemsProps extends ListItemProps {
	isMobile: boolean;
}

const BtnContent = (isKP: boolean) => (
	<>
		<Icon name="trailer" className={styles.icon} />
		{!isKP && <span>Трейлер</span>}
	</>
);

export const WatchItems = ({ isMobile, ...props }: WatchItemsProps) => {
	const { watchability, videos } = props;
	const isKP = canWatchInKP(watchability);

	return (
		<div className={styles.watchItems}>
			{isKP && <WatchButton shape="rounded" theme="gradient" size="size_24" />}
			{!isMobile && videos?.trailers?.length ? (
				<ModalTrailer
					{...props}
					videos={videos.trailers}
					shape={isKP ? 'circle' : 'rounded'}
					theme="primary"
					size="size_24"
					btnContent={BtnContent(isKP)}
					isSidebar
				/>
			) : null}
		</div>
	);
};
