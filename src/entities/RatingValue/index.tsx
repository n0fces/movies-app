import { clsx } from 'clsx';

import { Movie } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';
import { Rating } from '@/shared/ui/Rating';

import styles from './styles.module.scss';

type ThemeRating = 'listItem' | 'mobile';

interface RatingValueProps extends Pick<Movie, 'rating' | 'votes' | 'top250'> {
	className?: string;
	theme?: ThemeRating;
}

export const RatingValue = ({
	className,
	rating,
	votes,
	top250,
	theme = 'listItem',
}: RatingValueProps) => {
	const votesValue =
		theme === 'mobile'
			? `${(Number(votes?.kp) / 1000).toFixed(0)}K`
			: Number(votes?.kp).toLocaleString('ru-RU');

	return (
		<div
			className={clsx(styles.ratingValue, className, {
				[styles.listItem]: theme === 'listItem',
				[styles.mobile]: theme === 'mobile',
			})}>
			<div
				className={clsx(styles.ratingContainer, {
					[styles.ratingContainerFull]: theme === 'listItem',
				})}>
				{top250 && (
					<Icon
						name="left-leaf"
						className={clsx({
							[styles.listItemLeaf]: theme === 'listItem',
							[styles.mobileLeaf]: theme === 'mobile',
						})}
					/>
				)}
				<Rating rating={rating} theme={top250 ? 'top' : 'default'} />
				{top250 && (
					<Icon
						name="right-leaf"
						className={clsx({
							[styles.listItemLeaf]: theme === 'listItem',
							[styles.mobileLeaf]: theme === 'mobile',
						})}
					/>
				)}
			</div>
			<span className={styles.votes}>{votesValue}</span>
		</div>
	);
};
