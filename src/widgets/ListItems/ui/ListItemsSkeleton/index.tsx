import { RectSkeleton } from '../../../../shared/ui/Skeleton';
import styles from './styles.module.scss';

interface ListItemsSkeletonProps {
	limit: number;
}

export const ListItemsSkeleton = ({ limit }: ListItemsSkeletonProps) => {
	if (!Number.isInteger(limit) || limit <= 0) {
		return null;
	}

	return (
		<>
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- просто необходимо создать массив с нужным кол-ом элементов, чтобы пройтись по нему и заполнить нужным контентом */}
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
