import { VideoYT } from '@/shared/ui/VideoYT';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { Video } from '@/shared/types';
import Link from 'next/link';

interface OtherTrailerProps extends Video {
	className?: string;
}

export const OtherTrailer = ({
	className,
	...otherProps
}: OtherTrailerProps) => {
	const { name, url } = otherProps;
	return (
		<li className={clsx(styles.otherTrailer, className)}>
			{url ? (
				<Link
					href={url}
					className={clsx(styles.link, {
						[styles.otherTrailer]: url,
					})}>
					<VideoYT
						className={styles.trailerImage}
						{...otherProps}
					/>
					<div className={styles.trailerName}>{name}</div>
				</Link>
			) : (
				<>
					<VideoYT
						className={styles.trailerImage}
						{...otherProps}
					/>
					<div className={styles.trailerName}>{name}</div>
				</>
			)}
		</li>
	);
};
