import { RectSkeleton } from '../../../../shared/ui/Skeleton';
import styles from './styles.module.scss';

interface ListItemsSkeletonProps {
	limit: number;
}

export const ListItemsSkeleton = ({ limit }: ListItemsSkeletonProps) => {
	return (
		<>
			{[...Array(limit)].map((_, index) => (
				<div className={styles.listItemsSkeleton} key={index}>
					<RectSkeleton className={styles.image}></RectSkeleton>
					<div className={styles.text}>
						<RectSkeleton className={styles.row1}></RectSkeleton>
						<RectSkeleton className={styles.row2}></RectSkeleton>
						<RectSkeleton className={styles.row3}></RectSkeleton>
					</div>
				</div>
			))}
		</>
	);
};
