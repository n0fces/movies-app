import { TouchModal } from '@/entities/TouchModal';
import { FeedbackButtons } from '@/features/FeedbackButtons';
import { Icon } from '@/shared/ui/Icon';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface MoreOptionsProps {
	className?: string;
	poster?: string | null;
	title?: string | null;
	secondaryTitle?: string | null;
}

const BtnContentOptions = () => (
	<>
		<Icon
			name='more-options'
			className={styles.buttonIcon}
		/>
		Еще
	</>
);

export const MoreOptions = ({
	className,
	poster,
	title,
	secondaryTitle,
}: MoreOptionsProps) => {
	return (
		<TouchModal
			theme='textBelow'
			className={clsx(styles.moreOptions, className)}
			btnContent={BtnContentOptions()}
			poster={poster}
			title={title}
			secondaryTitle={secondaryTitle}
			isTitle>
			<div className={styles.buttonsCnt}>
				<FeedbackButtons theme='modal' />
			</div>
		</TouchModal>
	);
};
