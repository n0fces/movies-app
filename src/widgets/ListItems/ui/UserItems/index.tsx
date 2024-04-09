import { PlannedToWatch } from '@/features/PlannedToWatch';
import styles from './styles.module.scss';
import { MoreOptions } from './ui/MoreOptions';
import { clsx } from 'clsx';
import { ListItemProps } from '@/shared/types';
import { RatingBar } from '@/features/SetRating/ui/RatingBar';

interface UserItemsProps extends ListItemProps {
	isMobile: boolean;
}

export const UserItems = ({ isMobile, ...otherProps }: UserItemsProps) => {
	return (
		<div className={clsx(styles.userItems, { [styles.column]: isMobile })}>
			<PlannedToWatch
				small={isMobile}
				className={clsx(styles.plannedToWatch, {
					[styles.plannedToWatchSmall]: isMobile,
					[styles.iconDesk]: !isMobile
				})}
				theme={isMobile ? 'clear' : 'useFeature'}
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
