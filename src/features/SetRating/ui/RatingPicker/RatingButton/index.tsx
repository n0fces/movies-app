import { clsx } from 'clsx';

import { Movie } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import {
	useIsOpenDropdown,
	useIsOpenDropdownSetter,
	useRating,
	useSettersBase,
} from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';
import styles from './styles.module.scss';

interface RatingButtonProps extends Pick<Movie, 'isSeries'> {
	className?: string;
}

export const RatingButton = ({ className, isSeries }: RatingButtonProps) => {
	const { setIsOpen } = useSettersBase();
	const isOpenDropdown = useIsOpenDropdown();
	const setIsOpenDropdown = useIsOpenDropdownSetter();
	const rating = useRating();

	return (
		<Button
			theme="primary"
			size="size_32"
			maxWidth
			shape="rounded"
			withoutPadding
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
							setColorClasses(styles, rating),
						)}>
						<Icon name="star" className={styles.iconRating} />
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
