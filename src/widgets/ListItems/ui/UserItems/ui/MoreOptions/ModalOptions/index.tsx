import styles from './styles.module.scss';
import { ListItemProps } from '@/shared/types';
import { FeedbackButtons } from '@/features/FeedbackButtons';
import { Icon } from '@/shared/ui/Icon';
import { clsx } from 'clsx';
import { RatingModal } from '@/features/SetRating/ui/RatingModal';
import { AddToFoldersModal } from '@/features/AddToFolders/ui/AddToFoldersModal';
import { TouchModal } from '@/entities/TouchModal';
import { ModalTrailer } from '@/features/ModalTrailer';

interface ModalOptions extends ListItemProps {
	className?: string;
	isMobile: boolean;
}

const BtnContentOptions = () => (
	<Icon
		name='more-options'
		className={styles.buttonIcon}
	/>
);

const BtnContentTrailer = () => (
	<>
		<Icon
			name='trailer'
			className={styles.icon}
		/>
		Трейлер
	</>
);

export const ModalOptions = (props: ModalOptions) => {
	const { className, poster, name, alternativeName, enName, isMobile } =
		props;

	return (
		<TouchModal
			theme='clear'
			className={clsx(styles.button, className)}
			btnContent={BtnContentOptions()}
			poster={poster?.previewUrl}
			title={name}
			secondaryTitle={alternativeName || enName}
			isTitle>
			<div className={styles.buttonsCnt}>
				<ModalTrailer
					{...props}
					theme='modalFull'
					btnContent={BtnContentTrailer()}
					className={styles.trailerBtn}
					isSidebar={!isMobile}
				/>
				<RatingModal
					{...props}
					className={styles.ratingBtn}
					theme='modalFull'
				/>
				<AddToFoldersModal
					secondaryTitle={name}
					poster={poster?.previewUrl}
					className={styles.addToFoldersModal}
				/>
				<FeedbackButtons theme='modalFull' />
			</div>
		</TouchModal>
	);
};
