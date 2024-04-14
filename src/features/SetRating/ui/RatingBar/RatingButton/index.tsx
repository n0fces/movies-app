import { useHover } from '@/shared/hooks/useHover';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { clsx } from 'clsx';
import { useIsOpenBar, useSetRating } from '../../../context';
import styles from './styles.module.scss';
import { setColorClasses } from '../../../lib/setColorClasses';

export const RatingButton = () => {
	const { rating, setRating, setValue } = useSetRating();
	const { setIsOpen } = useIsOpenBar();
	const { isHover, onMouseEnter, onMouseLeave } = useHover();

	return (
		<Button
			theme='useFeature'
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
			className={clsx(styles.button)}
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
