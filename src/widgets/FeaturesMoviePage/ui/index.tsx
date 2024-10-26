import { clsx } from 'clsx';

import { getTitle } from '@/app/(main-root)/(page-id)/api/getTitle';

import { AddToFoldersModal } from '@/features/AddToFolders/ui/AddToFoldersModal';
import { PlannedToWatch } from '@/features/PlannedToWatch';
import { RatingModal } from '@/features/SetRating/ui/RatingModal';

import { MoreOptions } from './MoreOptions';
import styles from './styles.module.scss';

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

	const titleName = name ?? alternativeName ?? enName;
	const secondaryTitle = alternativeName ?? enName;

	return (
		<div className={clsx(styles.featuresMoviePage, className)}>
			<RatingModal theme="textBelow" className={styles.feature} {...title} />
			<PlannedToWatch theme="textBelow" className={styles.feature} />
			<AddToFoldersModal
				poster={poster?.previewUrl}
				title="Добавить"
				secondaryTitle={secondaryTitle}
				theme="textBelow"
				size="size_52"
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
