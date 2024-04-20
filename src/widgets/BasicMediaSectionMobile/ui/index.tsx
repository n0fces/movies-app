import { getTitle } from '@/app/(page-id)/api/getTitle';
import { BasicSectionMobile } from '@/entities/BasicSectionMobile';
import { RatingValue } from '@/entities/RatingValue';
import { ReadMoreTextBlock } from '@/entities/ReadMoreTextBlock';
import { AddToFoldersModal } from '@/features/AddToFolders/ui/AddToFoldersModal';
import { PlannedToWatch } from '@/features/PlannedToWatch';
import { RatingModal } from '@/features/SetRating/ui/RatingModal';
import { convertMinutes } from '@/shared/helpers/convertMinutes';
import { setCorrectEndWord } from '@/shared/helpers/setCorrectEndWord';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { clsx } from 'clsx';
import { MoreOptions } from './MoreOptions';
import styles from './styles.module.scss';

interface BasicMediaSectionMobileProps {
	className?: string;
	id: number;
}

export const BasicMediaSectionMobile = async ({
	className,
	id,
}: BasicMediaSectionMobileProps) => {
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
		shortDescription,
		seasonsInfo,
		description,
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
		<div className={clsx(styles.basicMediaSectionMobile, className)}>
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
			<div className={styles.features}>
				<RatingModal
					theme='textBelow'
					className={styles.feature}
					{...title}
				/>
				<PlannedToWatch
					theme='textBelow'
					className={styles.feature}
				/>
				<AddToFoldersModal
					poster={poster?.previewUrl}
					title='Добавить'
					secondaryTitle={secondaryTitle}
					theme='textBelow'
					className={styles.feature}
				/>
				<MoreOptions
					poster={poster?.previewUrl}
					title={titleName}
					secondaryTitle={secondaryTitle}
					className={styles.feature}
				/>
			</div>
			{shortDescription ? (
				<div className={styles.shortDescription}>
					{shortDescription}
				</div>
			) : null}
			{description ? <ReadMoreTextBlock text={description} /> : null}
		</div>
	);
};
