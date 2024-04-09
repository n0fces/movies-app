import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui/Button';
import {
	useSetRating,
	useIsOpenBar,
	useIsOpenDropdownMenu,
} from '../../../context';
import { Icon } from '@/shared/ui/Icon';
import { setColorClasses } from '../../../lib/setColorClasses';
import { Movie } from '@/shared/types';

interface RatingButtonProps extends Pick<Movie, 'isSeries'> {
	className?: string;
}

export const RatingButton = ({ className, isSeries }: RatingButtonProps) => {
	const { setIsOpen } = useIsOpenBar();
	const { setIsOpenDropdown, isOpenDropdown } = useIsOpenDropdownMenu();
	const { rating } = useSetRating();
	return (
		<Button
			theme='useFeature'
			onClick={() => {
				if (rating) {
					if (isOpenDropdown) {
						setIsOpenDropdown(false);
					} else {
						setIsOpenDropdown(true);
					}
				} else {
					setIsOpen(true);
				}
			}}
			className={clsx(styles.ratingButton, className)}>
			{rating ? (
				<div className={styles.withRating}>
					<span>Изменить оценку</span>
					<span
						className={clsx(
							styles.ratingNameplate,
							setColorClasses(styles, rating)
						)}>
						<Icon
							name='star'
							className={styles.iconRating}
						/>
						{rating}
					</span>
				</div>
			) : (
				<span className={styles.withoutRating}>
					Оценить {isSeries ? 'сериал' : 'фильм'}
				</span>
			)}
		</Button>
	);
};
