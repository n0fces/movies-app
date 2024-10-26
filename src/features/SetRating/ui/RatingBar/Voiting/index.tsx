import { clsx } from 'clsx';

import { Icon } from '@/shared/ui/Icon';

import { useSettersBase, useValue, useValueSetter } from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';
import styles from './styles.module.scss';

export const Voiting = () => {
	const { setRating, setIsOpen } = useSettersBase();
	const setValue = useValueSetter();
	const value = useValue();

	return (
		<div className={styles.voitingChoice}>
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- просто необходимо создать массив с нужным кол-ом элементов, чтобы пройтись по нему и заполнить нужным контентом */}
			{[...Array(10)].map((_, i) => {
				i = i + 1;
				return (
					<button
						key={i}
						aria-label={`Оценка ${i}`}
						// вот эти все колбэки надо будет потом вынести в отдельное место, а то компонент слишком большой получается из-за них
						onMouseOver={() => {
							setValue(i);
						}}
						onMouseOut={() => {
							setValue(undefined);
						}}
						onClick={() => {
							setValue(i);
							setRating(i);
							setIsOpen(false);
							// * здесь будет логика по установлению рейтинга со стороны пользователя
						}}
						className={styles.voitingBtn}>
						<Icon
							name="ratingStroked"
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
