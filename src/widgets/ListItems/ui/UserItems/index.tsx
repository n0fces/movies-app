import { clsx } from 'clsx';

import { PlannedToWatch } from '@/features/PlannedToWatch';
import { RatingBar } from '@/features/SetRating/ui/RatingBar';

import { ListItemProps } from '@/shared/types';

import styles from './styles.module.scss';
import { MoreOptions } from './ui/MoreOptions';

interface UserItemsProps extends ListItemProps {
	isMobile: boolean;
}

export const UserItems = ({ isMobile, ...otherProps }: UserItemsProps) => {
	return (
		<div className={clsx(styles.userItems, { [styles.column]: isMobile })}>
			<PlannedToWatch
				size="size_32"
				small={isMobile}
				className={clsx({
					[styles.plannedToWatchSmall]: isMobile,
					[styles.plannedToWatch]: !isMobile,
				})}
				theme={!isMobile ? 'primary' : undefined}
				shape={!isMobile ? 'rounded' : 'circle'}
				withoutPadding={isMobile}
			/>
			{!isMobile && <RatingBar className={styles.setRating} />}
			<MoreOptions
				className={styles.moreOption}
				isMobile={isMobile}
				{...otherProps}
			/>
		</div>
	);
};
