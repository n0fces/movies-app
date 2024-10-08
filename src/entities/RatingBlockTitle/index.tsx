import Link from 'next/link';

import { getPath } from '@/shared/helpers/getPath';
import { getRating } from '@/shared/helpers/getRating';
import { Movie } from '@/shared/types';
import { Icon } from '@/shared/ui/Icon';
import { Rating } from '@/shared/ui/Rating';

import styles from './styles.module.scss';

interface RatingBlockTitleProps
	extends Pick<Movie, 'rating' | 'top250' | 'votes' | 'isSeries'> {
	className?: string;
	children?: React.ReactNode;
}

export const RatingBlockTitle = ({
	className,
	rating,
	top250,
	votes,
	children,
	isSeries,
}: RatingBlockTitleProps) => {
	const ratingArr = getRating(rating);

	if (ratingArr !== null) {
		const [_, typeRating] = ratingArr;
		const isAwait = typeRating === 'await';
		const description = isAwait ? 'ждут премьеры' : 'оценки';
		const votesValue = isAwait
			? Number(votes?.await).toLocaleString('ru-RU')
			: Number(votes?.kp).toLocaleString('ru-RU');

		return (
			<div className={className}>
				<div className={styles.ratingBlock}>
					<Rating
						rating={rating}
						theme={top250 ? 'top' : 'default'}
						className={styles.ratingValue}
					/>
					{top250 && (
						<Link
							href={getPath.top250(isSeries)}
							className={styles.positionBadge}>
							<Icon name="left-leaf" className={styles.leaf} />
							<div className={styles.text}>
								<span className={styles.isTop250}>топ 250</span>
								<span className={styles.position}>{top250} место</span>
							</div>
							<Icon name="right-leaf" className={styles.leaf} />
						</Link>
					)}
				</div>
				{votesValue && (
					<div className={styles.votes}>
						{isAwait && <span>Рейтинг ожидания</span>}
						<span>
							{votesValue} {description}
						</span>
					</div>
				)}
				{children}
			</div>
		);
	} else {
		return null;
	}
};
