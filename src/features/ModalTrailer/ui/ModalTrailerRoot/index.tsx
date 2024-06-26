'use client';

import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { VideoYT } from '@/shared/ui/VideoYT';
import { TitleInfo } from '../TitleInfo';
import { OtherTrailers } from '../OtherTrailers';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ListItemProps, Video } from '@/shared/types';
import { useState } from 'react';

interface ModalTrailerRootProps extends ListItemProps {
	isOpen: boolean;
	closeModal: () => void;
	isSidebar?: boolean;
}

const ModalTrailerRoot = ({
	isOpen,
	closeModal,
	isSidebar,
	...otherProps
}: ModalTrailerRootProps) => {
	const { videos } = otherProps;
	console.log(videos);
	const trailers = videos?.trailers
		?.filter((trailer) => trailer.url)
		.slice(1);
	console.log(trailers);
	const [otherTrailers, setOtherTrailers] = useState(trailers?.slice(1));
	const [currentVideo, setCurrentVideo] = useState(trailers?.[0]);

	const changeCurrentTrailer = (trailer: Video) => {
		setCurrentVideo(trailer);
		setOtherTrailers((otherTrailers) =>
			otherTrailers?.map((item) =>
				item.url === trailer.url ? (currentVideo as Video) : item
			)
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
					withBtn
					isWatchable
					key={currentVideo?.url}
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
			<Button
				className={styles.closeBtn}
				onClick={closeModal}
				theme='clear'>
				<Icon
					name='close'
					className={styles.closeIcon}
				/>
			</Button>
		</Modal>
	);
};

export default ModalTrailerRoot;
