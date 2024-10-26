import { Video } from '@/shared/types';
import { PreviewYT } from '@/shared/ui/PreviewYT';

import styles from './styles.module.scss';

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
				onClick={() => { changeCurrentTrailer(trailer); }}
				className={styles.otherTrailer}
				aria-label={`Посмотреть трейлер ${name}`}>
				<PreviewYT
					className={styles.trailerImage}
					alt={trailer.name}
					url={trailer.url}
				/>
				<div className={styles.trailerName}>{name}</div>
			</button>
		</li>
	);
};
