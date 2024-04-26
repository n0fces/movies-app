import { BasicSectionMobile } from '@/entities/BasicSectionMobile';
import { RatingValue } from '@/entities/RatingValue';
import { convertMinutes } from '@/shared/helpers/convertMinutes';
import { setCorrectEndWord } from '@/shared/helpers/setCorrectEndWord';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { getTitle } from '@/app/(main-root)/(page-id)/api/getTitle';

interface BasicMediaMovieMobileProps {
	className?: string;
	id: number;
}

export const BasicMediaMovieMobile = async ({
	className,
	id,
}: BasicMediaMovieMobileProps) => {
	const title = await getTitle(id);
	const {
		name,
		enName,
		alternativeName,
		poster,
		rating,
		votes,
		top250,
		isSeries,
		year,
		releaseYears,
		seriesLength,
		movieLength,
		ageRating,
		countries,
		genres,
		seasonsInfo,
	} = title;

	const titleName = name || alternativeName || enName;
	const secondaryTitle = alternativeName || enName;
	const timestamp = isSeries
		? `${releaseYears?.[0].start}-${releaseYears?.[0].end ?? '...'}`
		: year;
	const during = convertMinutes(isSeries ? seriesLength : movieLength);
	const duringRender = during
		? stringWithDelimiter(' ', [
				during[0] ? `${during[0]} ч` : null,
				during[1] ? `${during[1]} мин` : null,
		  ])
		: null;
	const amountSeasons = isSeries
		? seasonsInfo?.length &&
		  `${seasonsInfo?.length} ${setCorrectEndWord(
				'сезон',
				seasonsInfo?.length
		  )}`
		: null;

	const firstMetaLine = stringWithDelimiter(', ', [
		timestamp,
		...(genres?.map((genre) => genre.name)?.slice(0, 3) ?? []),
		amountSeasons,
	]);
	const secondMetaLine = stringWithDelimiter(', ', [
		countries?.[0].name,
		duringRender,
		`${ageRating}+`,
	]);

	return (
		<div className={clsx(styles.basicMediaMovieMobile, className)}>
			<BasicSectionMobile
				title={titleName}
				secondaryTitle={secondaryTitle}
				poster={poster?.previewUrl}
				ratingBlock={() => (
					<RatingValue
						rating={rating}
						votes={votes}
						theme='mobile'
						top250={top250}
						className={styles.rating}
					/>
				)}
				metaInfo={[firstMetaLine, secondMetaLine]}
				className={styles.basicSection}
			/>
		</div>
	);
};
