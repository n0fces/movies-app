import { clsx } from 'clsx';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

import { RectSkeleton } from '../../../../shared/ui/Skeleton';
import styles from './styles.module.scss';

interface SkeletonProps {
	width: number;
	height: number;
	count: number;
}

export const CategoriesSkeleton = ({ width, height, count }: SkeletonProps) => {
	if (count <= 0) {
		return null;
	}
	const isMobile = deviceDetectServer();

	{
		/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- просто необходимо создать массив с нужным кол-ом элементов, чтобы пройтись по нему и заполнить нужным контентом */
	}
	return [...Array(count)].map((_, i) => (
		<div
			className={clsx(styles.card, {
				[styles.cardFull]: !isMobile,
			})}
			key={i}>
			<RectSkeleton width={width} height={height} />
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
