'use client';

import { clsx } from 'clsx';
import { useState } from 'react';

import { Video } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';
import { Modal } from '@/shared/ui/Modal';
import { VideoYT } from '@/shared/ui/VideoYT';

import { ListTrailersProps } from '../';
import { OtherTrailers } from '../OtherTrailers';
import { TitleInfo } from '../TitleInfo';
import styles from './styles.module.scss';

type ModalTrailerRootProps = ListTrailersProps & {
	isOpen: boolean;
	closeModal: () => void;
	isSidebar?: boolean;
};

const ModalTrailerRoot = ({
	isOpen,
	closeModal,
	isSidebar,
	...otherProps
}: ModalTrailerRootProps) => {
	const { videos } = otherProps;
	const trailers = videos.filter((trailer) => trailer.url).slice(1);
	const [otherTrailers, setOtherTrailers] = useState(trailers.slice(1));
	const [currentVideo, setCurrentVideo] = useState(trailers[0]);

	const changeCurrentTrailer = (trailer: Video) => {
		setCurrentVideo(trailer);
		setOtherTrailers((otherTrailers) =>
			otherTrailers.map((item) =>
				item.url === trailer.url ? currentVideo : item,
			),
		);
	};

	return (
		<Modal
			className={clsx(styles.trailerRoot, {
				[styles.trailerRootSmall]: !isSidebar,
				[styles.trailerRootFull]: isSidebar,
			})}
			isOpen={isOpen}
			closeModal={closeModal}>
			<div className={styles.trailerContainer}>
				<VideoYT
					key={currentVideo.url}
					className={styles.trailer}
					{...currentVideo}
				/>
			</div>
			{isSidebar && (
				<div className={styles.sidebar}>
					<TitleInfo {...otherProps} />
					<OtherTrailers
						otherTrailers={otherTrailers}
						changeCurrentTrailer={changeCurrentTrailer}
					/>
				</div>
			)}
			<button className={styles.closeBtn} onClick={closeModal}>
				<Icon name="close" className={styles.closeIcon} />
			</button>
		</Modal>
	);
};

export default ModalTrailerRoot;
