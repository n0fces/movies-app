import { getTitle } from '@/app/(title)/api/getTitle';
import { HeaderNamespace } from '@/entities/HeaderNamespace';
import { MoreOptionsDropdown } from '@/entities/MoreOptionsDropdown';
import { RatingBlockTitle } from '@/entities/RatingBlockTitle';
import { WatchingServices } from '@/entities/WatchingServices';
import { FeedbackButtons } from '@/features/FeedbackButtons';
import { PlannedToWatch } from '@/features/PlannedToWatch';
import { TicketsOnSaleBtn } from '@/features/TicketsOnSaleBtn';
import { WatchButton } from '@/features/WatchButton';
import { canWatchInKP } from '@/shared/helpers/canWatchInKP';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { RatingPicker } from '@/features/SetRating/ui/RatingPicker';

interface HeaderTitleProps {
	className?: string;
	id: number;
}

export const HeaderTitle = async ({ className, id }: HeaderTitleProps) => {
	const isMobile = deviceDetectServer();
	const {
		watchability,
		ticketsOnSale,
		isSeries,
		releaseYears,
		year,
		name,
		alternativeName,
		enName,
		ageRating,
		votes,
		rating,
		top250,
	} = await getTitle(id);
	const isKP = canWatchInKP(watchability);
	const isSmall = ticketsOnSale || isKP;
	const timestamp =
		isSeries && releaseYears
			? `${releaseYears[0].start} – ${releaseYears[0].end ?? '...'}`
			: year;

	return (
		<div className={clsx(styles.headerTitle, className)}>
			<HeaderNamespace
				title={`${name} (${timestamp})`}
				subtitle={alternativeName || enName}
				ageRating={ageRating}
				className={styles.headerNamespace}>
				<div className={styles.btnsContainer}>
					{ticketsOnSale ? (
						<TicketsOnSaleBtn
							id={id}
							className={styles.btn}
						/>
					) : (
						isKP && <WatchButton className={styles.btn} />
					)}
					<PlannedToWatch
						small={isSmall}
						className={clsx(styles.btn, {
							[styles.btnSmall]: isSmall,
						})}
					/>
					<MoreOptionsDropdown
						theme='useFeature'
						className={clsx(styles.btn, styles.btnSmall)}>
						<FeedbackButtons />
					</MoreOptionsDropdown>
				</div>
				<WatchingServices
					isMobile={isMobile}
					watchability={watchability}
					className={styles.watchingServicesCnt}
				/>
			</HeaderNamespace>
			<RatingBlockTitle
				votes={votes}
				rating={rating}
				isSeries={isSeries}
				top250={top250}
				className={styles.ratingBlockTitle}>
				<RatingPicker
					className={styles.ratingPicker}
					isSeries={isSeries}
				/>
			</RatingBlockTitle>
		</div>
	);
};
