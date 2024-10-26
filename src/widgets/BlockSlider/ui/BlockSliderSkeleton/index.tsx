import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

import { RectSkeleton } from '../../../../shared/ui/Skeleton';
import styles from './styles.module.scss';

interface SkeletonProps {
	countCards: number;
	width: number;
	height: number;
}

const Card = ({ width, height }: Omit<SkeletonProps, 'countCards'>) => (
	<div className={styles.card}>
		<RectSkeleton width={width} height={height} />
		<RectSkeleton width={width} height={24} />
		<RectSkeleton width={width * 0.6} height={24} />
	</div>
);

export const BlockSliderSkeleton = ({
	countCards,
	width,
	height,
}: SkeletonProps) => {
	const isMobile = deviceDetectServer();

	return (
		<>
			<RectSkeleton
				className={styles.mainTitle}
				width={300}
				height={isMobile ? 24 : 28}
			/>
			<div className={styles.carousel}>
				{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- просто необходимо создать массив с нужным кол-ом элементов, чтобы пройтись по нему и заполнить нужным контентом */}
				{[...Array(countCards)].map((_, i) => (
					<Card key={i} width={width} height={height} />
				))}
			</div>
		</>
	);
};
