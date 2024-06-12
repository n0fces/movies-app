import { Video } from '@/shared/types';
import { clsx } from 'clsx';
import { OtherTrailer } from '../OtherTrailer';
import styles from './styles.module.scss';

interface OtherTrailersProps {
	className?: string;
	otherTrailers: Video[] | undefined;
	changeCurrentTrailer: (trailer: Video) => void;
}

export const OtherTrailers = ({
	className,
	otherTrailers,
	changeCurrentTrailer,
}: OtherTrailersProps) => {
	return otherTrailers?.length ? (
		<>
			<div className={styles.alsoLook}>Посмотрите ещё</div>
			<ul className={clsx(styles.otherTrailers, className)}>
				{otherTrailers.map((trailer, index) => (
					<OtherTrailer
						key={index}
						trailer={trailer}
						changeCurrentTrailer={changeCurrentTrailer}
					/>
				))}
			</ul>
		</>
	) : null;
};
