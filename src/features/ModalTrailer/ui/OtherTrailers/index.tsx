import { ListItemProps } from '@/shared/types';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { OtherTrailer } from '../OtherTrailer';

interface OtherTrailersProps extends Pick<ListItemProps, 'videos'> {
	className?: string;
}

export const OtherTrailers = ({ className, videos }: OtherTrailersProps) => {
	return videos?.trailers?.length ? (
		<>
			<div className={styles.alsoLook}>Посмотрите ещё</div>
			<ul className={clsx(styles.otherTrailers, className)}>
				{videos?.trailers?.map((trailer, index) => (
					<OtherTrailer
						{...trailer}
						key={index}
					/>
				))}
			</ul>
		</>
	) : null;
};
