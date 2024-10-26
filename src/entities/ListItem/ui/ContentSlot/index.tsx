import { clsx } from 'clsx';
import Link from 'next/link';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { getPath } from '@/shared/helpers/getPath';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter/stringWithDelimiter';

import { ListItemPropsEx } from '../index';
import styles from './styles.module.scss';

type ContentSlotProps = Pick<
	ListItemPropsEx,
	| 'name'
	| 'alternativeName'
	| 'enName'
	| 'year'
	| 'releaseYears'
	| 'movieLength'
	| 'seriesLength'
	| 'countries'
	| 'genres'
	| 'persons'
	| 'watchItems'
	| 'id'
>;

export const ContentSlot = ({
	name,
	enName,
	alternativeName,
	watchItems,
	releaseYears,
	year,
	movieLength,
	seriesLength,
	countries,
	genres,
	persons,
	id,
}: ContentSlotProps) => {
	const isMobile = deviceDetectServer();
	const path = releaseYears ? getPath.series(id) : getPath.movie(id);
	const title = name ?? alternativeName ?? enName;
	const secondaryTitle = alternativeName ?? enName;
	const during = releaseYears?.length
		? `${releaseYears[0].start}–${releaseYears[0].end ?? '...'}`
		: '';
	const timestamp = during !== '' ? during : year;
	const country = countries?.length ? countries[0].name : null;
	const genre = genres?.length ? genres[0].name : null;
	const director =
		persons?.find((person) => person.profession === 'режиссеры')?.name ?? null;
	const cast = persons
		?.filter((person) => person.profession === 'актеры')
		.map((person) => person.name)
		.slice(0, 2);
	const length = movieLength ?? seriesLength;
	const duration = !isMobile && length ? `${length} мин.` : null;

	return (
		<div className={styles.content}>
			<Link href={path}>
				<div>
					<div
						className={clsx(styles.title, {
							[styles.titleSmall]: isMobile,
						})}>
						{title}
					</div>
					<div className={styles.secondaryTitle}>
						{stringWithDelimiter(', ', [secondaryTitle, timestamp, duration])}
					</div>
					<div className={styles.additionalInfo}>
						<div>
							<span>{stringWithDelimiter(' • ', [country, genre])}</span>
							{!isMobile && <span>&nbsp;&nbsp;Режиссёр: {director}</span>}
						</div>
						{!isMobile && (
							<div>{cast?.length ? `В ролях: ${cast.join(', ')}` : null}</div>
						)}
					</div>
				</div>
			</Link>
			<div className={styles.watchItems}>{watchItems?.()}</div>
		</div>
	);
};
