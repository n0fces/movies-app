import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { clsx } from 'clsx';
import { useIsOpenBar, useSetRating } from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';
import styles from './styles.module.scss';

export const Voiting = () => {
	const { setValue, setRating, value } = useSetRating();
	const { setIsOpen } = useIsOpenBar();

	return (
		<div className={styles.voitingChoice}>
			{[...Array(10)].map((_, i) => {
				i = i + 1;
				return (
					<Button
						key={i}
						aria-label={`Оценка ${i}`}
						theme='clear'
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
						}}>
						<Icon
							name='ratingStroked'
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
