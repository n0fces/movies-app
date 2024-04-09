import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { useIsOpenBar, useSetRating } from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';
import { Icon } from '@/shared/ui/Icon';

interface VoitingBarProps {
	className?: string;
}

export const VoitingBar = ({ className }: VoitingBarProps) => {
	const { setValue, setRating, value } = useSetRating();
	const { setIsOpen } = useIsOpenBar();

	return (
		<div className={clsx(styles.voitingBar, className)}>
			<Icon
				name='star'
				className={styles.iconStar}
			/>
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
						className={clsx(
							styles.button,
							setColorClasses(styles, value, i)
						)}>
						{i}
					</button>
				);
			})}
		</div>
	);
};
