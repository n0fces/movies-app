import styles from './styles.module.scss';
import { PosterProps } from './types';
import { Rating } from '@/shared/ui/Rating';
import { Nameplate } from '@/shared/ui/Nameplate';
import { MyImage } from '@/shared/ui/MyImage';
import { clsx } from 'clsx';

// * Здесь надо будет в интерфейсе уменьшить количество штук, которое ожидается сверху

export const Poster = ({
	poster,
	alt,
	widthPoster,
	heightPoster,
	rating,
	watchability,
	ticketsOnSale,
	interactiveBtns,
	className,
}: PosterProps) => {
	return (
		<div className={clsx(styles.posterWrapper, className)}>
			<MyImage
				src={poster?.url}
				alt={alt}
				width={widthPoster}
				height={heightPoster}
			/>
			<div className={styles.posterOverlay}>
				<Rating
					className={styles.ratingSlot}
					rating={rating}
					theme='nameplate'
				/>
				<Nameplate
					className={styles.nameplateSlot}
					watchability={watchability}
					ticketsOnSale={ticketsOnSale}
				/>
				{Boolean(interactiveBtns) ? (
					<div className={styles.buttonsSlot}>{interactiveBtns}</div>
				) : null}
			</div>
		</div>
	);
};
