import { clsx } from 'clsx';
import Link from 'next/link';

import { getTitle } from '@/app/(main-root)/(page-id)/api/getTitle';

import { AddToFoldersDropdown } from '@/features/AddToFolders/ui/AddToFoldersDropdown';
import { ModalTrailer } from '@/features/ModalTrailer';
import { SocialServices } from '@/features/SocialServices';

import { Video } from '@/shared/types';
import { MyImage } from '@/shared/ui/MyImage';
import { PreviewYT } from '@/shared/ui/PreviewYT';

import styles from './styles.module.scss';

interface BasicMediaMovieProps {
	className?: string;
	id: number;
}

const TrailerBtnContent = (props?: Video) => (
	<PreviewYT className={styles.trailer} {...props} withBtn />
);

export const BasicMediaMovie = async ({
	className,
	id,
}: BasicMediaMovieProps) => {
	const title = await getTitle(id);
	const {
		poster,
		name,
		alternativeName,
		enName,
		videos,
		isSeries,
		seasonsInfo,
		releaseYears,
		year,
	} = title;
	const text = isSeries
		? `${name}, (сериал, 1-${seasonsInfo?.length} сезоны, все серии), ${releaseYears?.[0].start}-${releaseYears?.[0].end} — Описание, интересные факты — KinoStar`
		: `${name}, ${year} — Описание, интересные факты — KinoStar`;

	return (
		<div className={clsx(styles.basicMediaMovie, className)}>
			<div className={styles.posterContainer}>
				{/* здесь будет линка на страницу со всеми постерами */}
				<Link href={'#'}>
					<MyImage
						src={poster?.previewUrl}
						alt={name ?? alternativeName ?? enName}
						width={302}
						height={453}
						className={styles.poster}
					/>
				</Link>
			</div>
			<div className={styles.trailerContainer}>
				{videos?.trailers?.length ? (
					<>
						<ModalTrailer
							{...title}
							className={styles.trailerWrapper}
							isSidebar
							btnContent={TrailerBtnContent(videos.trailers[0])}
							videos={videos.trailers}
						/>
						<Link href={'#'} className={styles.linkTrailers}>
							{videos.trailers[0]?.name}
						</Link>
					</>
				) : null}
			</div>
			<div className={styles.userControlsContainer}>
				<AddToFoldersDropdown />
			</div>
			<div className={styles.socialControlsContainer}>
				<SocialServices text={text} />
			</div>
		</div>
	);
};
