import styles from './styles.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { useIsOpenBar, useSetRating } from '../../../context';

export const Indicator = () => {
	const { value } = useSetRating();
	const { setIsOpen } = useIsOpenBar();

	return (
		<div className={styles.indicator}>
			{value ?? (
				<button
					aria-label='Отменить выбор оценки'
					onClick={() => setIsOpen(false)}>
					<Icon
						name='close-black'
						className={styles.closeIcon}
					/>
				</button>
			)}
		</div>
	);
};
