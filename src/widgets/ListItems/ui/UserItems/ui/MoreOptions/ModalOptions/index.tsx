import { clsx } from 'clsx';

import { AddToFoldersModal } from '@/features/AddToFolders/ui/AddToFoldersModal';
import { FeedbackButtons } from '@/features/FeedbackButtons';
import { ModalTrailer } from '@/features/ModalTrailer';
import { RatingModal } from '@/features/SetRating/ui/RatingModal';

import { TouchModal } from '@/entities/TouchModal';

import { ListItemProps } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';

import styles from './styles.module.scss';

interface ModalOptions extends ListItemProps {
	className?: string;
}

const BtnContentOptions = () => (
	<Icon name="more-options" className={styles.buttonIcon} />
);

const BtnContentTrailer = () => (
	<>
		<Icon name="trailer" className={styles.icon} />
		Трейлер
	</>
);

export const ModalOptions = (props: ModalOptions) => {
	const { className, poster, name, alternativeName, enName, videos } = props;

	return (
		<TouchModal
			className={clsx(styles.button, className)}
			btnContent={BtnContentOptions()}
			poster={poster?.previewUrl}
			title={name}
			secondaryTitle={alternativeName ?? enName}
			isTitle>
			<div className={styles.buttonsCnt}>
				{/* здесь с пропсами надо подумать. если поставить деструктуризацию пропсов в конец, то все сломается по стилям */}
				{videos?.trailers?.length ? (
					<ModalTrailer
						{...props}
						videos={videos.trailers}
						theme="modal"
						size="size_64"
						withoutPadding
						className={styles.trailerBtn}
						btnContent={BtnContentTrailer()}
					/>
				) : null}
				<RatingModal
					{...props}
					theme="modal"
					size="size_64"
					withoutPadding
					className={styles.ratingBtn}
				/>
				<AddToFoldersModal
					theme="modal"
					size="size_64"
					withoutPadding
					secondaryTitle={name}
					poster={poster?.previewUrl}
					className={styles.addToFoldersModal}
				/>
				<FeedbackButtons theme="modal" />
			</div>
		</TouchModal>
	);
};
