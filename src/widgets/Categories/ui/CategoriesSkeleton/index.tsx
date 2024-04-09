import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { RectSkeleton } from '../../../../shared/ui/Skeleton';

interface SkeletonProps {
	width: number;
	height: number;
	count: number;
}

export const CategoriesSkeleton = ({ width, height, count }: SkeletonProps) => {
	const isMobile = deviceDetectServer();

	return [...Array(count)].map((_, i) => (
		<div
			className={clsx(styles.card, {
				[styles.cardFull]: !isMobile,
			})}
			key={i}>
			<RectSkeleton
				width={width}
				height={height}
			/>
			<div className={styles.meta}>
				<RectSkeleton
					className={clsx(styles.title, {
						[styles.titleFull]: !isMobile,
					})}></RectSkeleton>
				<RectSkeleton
					className={clsx(styles.subTitle, {
						[styles.subTitleFull]: !isMobile,
					})}></RectSkeleton>
			</div>
		</div>
	));
};
