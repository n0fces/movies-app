import Link from 'next/link';

import { getPath } from '@/shared/helpers/getPath';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { SearchMovie } from '@/shared/types';
import { MyImage } from '@/shared/ui/MyImage';
import { Nameplate } from '@/shared/ui/Nameplate';
import { Rating } from '@/shared/ui/Rating';

import styles from './styles.module.scss';

export const SuggestItem = ({
	id,
	name,
	poster,
	alternativeName,
	year,
	rating,
	ticketsOnSale,
	isSeries,
}: SearchMovie) => {
	return (
		<Link
			href={isSeries ? getPath.series(id) : getPath.movie(id)}
			className={styles.link}>
			<li className={styles.suggestItem}>
				<MyImage
					className={styles.image}
					src={poster?.previewUrl}
					alt={name}
					width={32}
					height={48}
				/>
				<div className={styles.text}>
					<div className={styles.title}>{name}</div>
					<div className={styles.description}>
						<Rating rating={rating} className={styles.rating} />
						{stringWithDelimiter(', ', [alternativeName, year])}
					</div>
				</div>
				<div>
					<Nameplate
						className={styles.nameplate}
						ticketsOnSale={ticketsOnSale}
					/>
				</div>
			</li>
		</Link>
	);
};
