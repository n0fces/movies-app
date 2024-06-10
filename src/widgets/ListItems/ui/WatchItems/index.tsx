import { WatchButton } from '@/features/WatchButton';
import styles from './styles.module.scss';
import { ListItemProps } from '@/shared/types';
import { canWatchInKP } from '@/shared/helpers/canWatchInKP';
import { Icon } from '@/shared/ui/Icon';
import { ModalTrailer } from '@/features/ModalTrailer';

interface WatchItemsProps extends ListItemProps {
	isMobile: boolean;
}

const BtnContent = (isKP: boolean) =>
	(
		<>
			<Icon
				name='trailer'
				className={styles.icon}
			/>
			{!isKP && <span>Трейлер</span>}
		</>
	);

export const WatchItems = ({ isMobile, ...props }: WatchItemsProps) => {
	const { watchability } = props;
	const isKP = canWatchInKP(watchability);

	return (
		<div className={styles.watchItems}>
			{isKP && <WatchButton className={styles.button} />}
			{!isMobile && (
				<ModalTrailer
					theme='useFeature'
					className={isKP ? styles.buttonSmall : styles.button}
					btnContent={BtnContent(isKP)}
					isSidebar
					{...props}
				/>
			)}
		</div>
	);
};
