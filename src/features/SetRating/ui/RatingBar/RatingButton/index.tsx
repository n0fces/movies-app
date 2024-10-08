import { useHover } from '@/shared/hooks/useHover';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { clsx } from 'clsx';
import { useRating, useSettersBase, useValueSetter } from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';
import styles from './styles.module.scss';

export const RatingButton = () => {
	const rating = useRating();
	const { setIsOpen, setRating } = useSettersBase();
	const setValue = useValueSetter();
	const { isHover, onMouseEnter, onMouseLeave } = useHover();

	return (
		<Button
			theme='primary'
			shape='circle'
			maxWidth
			maxHeight
			onClick={() => {
				if (rating) {
					// * здесь будет логика по удалению рейтинга из бд
					setRating(undefined);
					setValue(undefined);
				} else {
					setIsOpen(true);
				}
			}}
			onMouseOver={rating ? onMouseEnter : undefined}
			onMouseOut={rating ? onMouseLeave : undefined}
			aria-label={rating ? 'Удалить оценку' : 'Оценить'}
			title={rating ? 'Удалить оценку' : 'Оценить'}>
			{rating ? (
				<>
					{isHover && (
						<div className={styles.deleteWrapper}>
							<Icon
								name='close-black'
								className={styles.ratingIcon}
							/>
						</div>
					)}
					{!isHover && (
						<span
							className={clsx(
								styles.rating,
								setColorClasses(styles, rating)
							)}>
							{rating}
						</span>
					)}
				</>
			) : (
				<Icon
					name='ratingStroked'
					className={styles.ratingIcon}
				/>
			)}
		</Button>
	);
};
