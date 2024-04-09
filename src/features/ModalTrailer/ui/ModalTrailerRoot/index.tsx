import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { VideoYT } from '@/shared/ui/VideoYT';
import { TitleInfo } from '../TitleInfo';
import { OtherTrailers } from '../OtherTrailers';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ListItemProps } from '@/shared/types';

interface ModalTrailerRootProps extends ListItemProps {
	isOpen: boolean;
	closeModal: () => void;
	isMobile: boolean;
	isSidebar?: boolean;
}

const ModalTrailerRoot = ({
	isOpen,
	closeModal,
	isMobile,
	isSidebar,
	...otherProps
}: ModalTrailerRootProps) => {
	const { videos } = otherProps;
	return (
		<Modal
			className={clsx(styles.trailerRoot, {
				[styles.trailerRootSmall]: isMobile,
				[styles.trailerRootFull]: !isMobile,
			})}
			isOpen={isOpen}
			closeModal={closeModal}>
			<div className={styles.trailerContainer}>
				<VideoYT
					className={styles.trailer}
					{...videos?.trailers?.[0]}
					withBtn
					isWatchable
				/>
			</div>
			{isSidebar && (
				<div className={styles.sidebar}>
					<TitleInfo {...otherProps} />
					<OtherTrailers videos={videos} />
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
