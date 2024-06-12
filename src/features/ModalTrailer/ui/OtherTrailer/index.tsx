import { VideoYT } from '@/shared/ui/VideoYT';
import styles from './styles.module.scss';
import { Video } from '@/shared/types';

interface OtherTrailerProps extends Video {
	className?: string;
	trailer: Video;
	changeCurrentTrailer: (trailer: Video) => void;
}

export const OtherTrailer = ({
	trailer,
	className,
	changeCurrentTrailer,
}: OtherTrailerProps) => {
	const { name } = trailer;
	return (
		<li className={className}>
			<button
				onClick={() => changeCurrentTrailer(trailer)}
				className={styles.otherTrailer}
				aria-label={`Посмотреть трейлер ${name}`}>
				<VideoYT
					className={styles.trailerImage}
					{...trailer}
				/>
				<div className={styles.trailerName}>{name}</div>
			</button>
		</li>
	);
};
