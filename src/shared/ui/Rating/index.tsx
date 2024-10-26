import clsx from 'clsx';

import { getRating } from '@/shared/helpers/getRating';
import { Rating as RatingType } from '@/shared/types';

import styles from './styles.module.scss';

export type ThemeRating = 'default' | 'nameplate' | 'top';

export interface RatingProps {
	rating?: RatingType | null;
	className?: string;
	theme?: ThemeRating;
}

export const Rating = ({
	rating,
	className,
	theme = 'default',
}: RatingProps) => {
	const ratingArr = getRating(rating);

	// * короче здесь проблема в апи, с которой я получаю данные)
	if (ratingArr !== null) {
		const [ratingVal, typeRating] = ratingArr;
		const isAwait = typeRating === 'await';
		const value = isAwait ? `${ratingVal}%` : ratingVal;
		const description = isAwait
			? `Рейтинг ожидания ${value}`
			: `Рейтинг ${value}`;
		const isPositive = isAwait
			? Number(ratingVal) > 70
			: Number(ratingVal) >= 7;
		const isNegative = isAwait ? Number(ratingVal) < 50 : Number(ratingVal) < 5;

		return (
			<div
				className={clsx(
					styles.rating,
					styles[theme],
					{
						[styles.positiveValue]: isPositive,
						[styles.negativeValue]: isNegative,
					},
					className,
				)}>
				<span className="visually-hidden">{description}</span>
				<span aria-hidden="true">{value}</span>
			</div>
		);
	} else {
		return null;
	}
};
