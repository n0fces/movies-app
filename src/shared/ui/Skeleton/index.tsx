import { clsx } from 'clsx';

interface RectangleSkeletonProps {
	className?: string;
	width?: number;
	height?: number;
}

export const RectSkeleton = ({
	className,
	width,
	height,
}: RectangleSkeletonProps) => {
	return (
		<div
			className={clsx('animation', className)}
			style={{ width, height }}></div>
	);
};
