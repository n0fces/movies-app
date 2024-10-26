import { clsx } from 'clsx';

import { Icon } from '@/shared/ui/Icon';

import { useValue, useValueSetter } from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';
import styles from './styles.module.scss';

export const Voiting = () => {
	const value = useValue();
	const setValue = useValueSetter();

	return (
		<div className={styles.voiting}>
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- просто необходимо создать массив с нужным кол-ом элементов, чтобы пройтись по нему и заполнить нужным контентом */}
			{[...Array(10)].map((_, i) => {
				i = i + 1;
				return (
					<button
						key={i}
						aria-label={`Оценка ${i}`}
						onClick={() => {
							setValue(i);
						}}>
						<Icon
							name="ratingFilled"
							className={clsx(
								styles.choiceIcon,
								setColorClasses(styles, value, i, true),
							)}
						/>
					</button>
				);
			})}
		</div>
	);
};
