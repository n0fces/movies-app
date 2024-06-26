import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { RatingModal } from '@/features/SetRating/ui/RatingModal';
import { PlannedToWatch } from '@/features/PlannedToWatch';
import { AddToFoldersModal } from '@/features/AddToFolders/ui/AddToFoldersModal';
import { MoreOptions } from './MoreOptions';
import { getTitle } from '@/app/(main-root)/(page-id)/api/getTitle';

interface FeaturesMoviePageProps {
	className?: string;
	id: number;
}

export const FeaturesMoviePage = async ({
	className,
	id,
}: FeaturesMoviePageProps) => {
	const title = await getTitle(id);
	const { name, enName, alternativeName, poster } = title;

	const titleName = name || alternativeName || enName;
	const secondaryTitle = alternativeName || enName;

	return (
		<div className={clsx(styles.featuresMoviePage, className)}>
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
	);
};
