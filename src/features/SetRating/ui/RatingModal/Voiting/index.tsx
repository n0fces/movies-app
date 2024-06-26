import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { clsx } from 'clsx';
import { useValue, useValueSetter } from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';
import styles from './styles.module.scss';

export const Voiting = () => {
	const value = useValue();
	const setValue = useValueSetter();

	return (
		<div className={styles.voiting}>
			{[...Array(10)].map((_, i) => {
				i = i + 1;
				return (
					<Button
						key={i}
						aria-label={`Оценка ${i}`}
						theme='clear'
						onClick={() => {
							setValue(i);
						}}>
						<Icon
							name='ratingFilled'
							className={clsx(
								styles.choiceIcon,
								setColorClasses(styles, value, i, true)
							)}
						/>
					</Button>
				);
			})}
		</div>
	);
};
