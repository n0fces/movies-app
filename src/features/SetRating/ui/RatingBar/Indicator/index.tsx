import { Icon } from '@/shared/ui/Icon';
import { useSettersBase, useValue } from '../../../context';
import styles from './styles.module.scss';

export const Indicator = () => {
	const value = useValue();
	const { setIsOpen } = useSettersBase();

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
