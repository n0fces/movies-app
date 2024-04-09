import { getTitle } from '@/app/(title)/api/getTitle';
import { AddToFoldersDropdown } from '@/features/AddToFolders/ui/AddToFoldersDropdown';
import { ModalTrailer } from '@/features/ModalTrailer';
import { SocialServices } from '@/features/SocialServices';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { Video as VideoAPI } from '@/shared/types';
import { MyImage } from '@/shared/ui/MyImage';
import { VideoYT } from '@/shared/ui/VideoYT';
import { clsx } from 'clsx';
import Link from 'next/link';
import styles from './styles.module.scss';

interface BasicMediaSectionProps {
	className?: string;
	id: number;
}

const TrailerBtnContent = (props?: VideoAPI) => (
	<VideoYT
		className={styles.trailer}
		{...props}
		withBtn
	/>
);

export const BasicMediaSection = async ({
	className,
	id,
}: BasicMediaSectionProps) => {
	const title = await getTitle(id);
	const { poster, name, alternativeName, enName, videos } = title;
	const isMobile = deviceDetectServer();

	return (
		<aside className={clsx(styles.basicMediaSection, className)}>
			<div className={styles.posterContainer}>
				{/* здесь будет линка на страницу со всеми постерами */}
				<Link href={'#'}>
					<MyImage
						src={poster?.previewUrl}
						alt={name || alternativeName || enName}
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
							className={styles.trailerWrapper}
							isMobile={isMobile}
							isSidebar
							theme='clear'
							btnContent={TrailerBtnContent(
								videos?.trailers?.[0]
							)}
							{...title}
						/>
						<Link
							href={'#'}
							className={styles.linkTrailers}>
							{videos?.trailers?.[0]?.name}
						</Link>
					</>
				) : null}
			</div>
			<div className={styles.userControlsContainer}>
				<AddToFoldersDropdown />
			</div>
			<div className={styles.socialControlsContainer}>
				<SocialServices {...title} />
			</div>
		</aside>
	);
};
