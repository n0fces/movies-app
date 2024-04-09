import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import styles from './styles.module.scss';
import { RectSkeleton } from '../../../../shared/ui/Skeleton';

interface SkeletonProps {
	countCards: number;
	width: number;
	height: number;
}

const Card = ({ width, height }: Omit<SkeletonProps, 'countCards'>) => (
	<div className={styles.card}>
		<RectSkeleton
			width={width}
			height={height}
		/>
		<RectSkeleton
			width={width}
			height={24}
		/>
		<RectSkeleton
			width={width * 0.6}
			height={24}
		/>
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
				{[...Array(countCards)].map((_, i) => (
					<Card
						key={i}
						width={width}
						height={height}
					/>
				))}
			</div>
		</>
	);
};
