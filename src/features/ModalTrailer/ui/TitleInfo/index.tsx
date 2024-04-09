import { MyImage } from '@/shared/ui/MyImage';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { ListItemProps } from '@/shared/types';
import { getPath } from '@/shared/helpers/getPath';
import Link from 'next/link';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { Rating } from '@/shared/ui/Rating';

interface TitleInfoProps extends ListItemProps {
	className?: string;
}

export const TitleInfo = ({
	className,
	id,
	releaseYears,
	year,
	poster,
	name,
	alternativeName,
	enName,
	countries,
	genres,
	rating,
	votes,
}: TitleInfoProps) => {
	const path = releaseYears ? getPath.series(id) : getPath.movie(id);
	const title = name || alternativeName || enName;
	const secondaryTitle = alternativeName || enName;
	const during = releaseYears?.length
		? `${releaseYears[0].start} - ${releaseYears[0].end}`
		: '';
	const timestamp = during !== '' ? during : year;
	const country = countries?.length ? countries[0].name : null;
	const genre = genres
		?.slice(0, 2)
		.map((genre) => genre.name)
		.join(', ');

	return (
		<div className={clsx(styles.titleInfo, className)}>
			<Link href={path}>
				<MyImage
					width={80}
					height={120}
					src={poster?.previewUrl}
					alt={title}
				/>
			</Link>
			<div className={styles.content}>
				<Link
					href={path}
					className={styles.title}>
					{title}
				</Link>
				<div className={styles.subTitle}>
					{stringWithDelimiter(', ', [secondaryTitle, timestamp])}
				</div>
				<div className={styles.additionalInfo}>
					{stringWithDelimiter(' • ', [country, genre])}
				</div>
				{/* Здесь еще может быть кнопка смотреть, если тайтл доступен на кп */}
				<div className={styles.ratingContainer}>
					<Rating
						className={styles.rating}
						rating={rating}
						theme='default'
					/>
					<span className={styles.votes}>
						{Number(votes?.kp).toLocaleString('ru-RU')}
					</span>
				</div>
			</div>
		</div>
	);
};
