import { clsx } from 'clsx';

import { getPerson } from '@/app/(main-root)/(page-id)/api/getPerson';

import { AddToFoldersPersonModal } from '@/features/AddToFoldersPerson/ui/AddToFoldersPersonModal';
import { SetFavouritePerson } from '@/features/SetFavouritePerson';

import styles from './styles.module.scss';

interface FeaturesPersonPageProps {
	className?: string;
	id: number;
}

export const FeaturesPersonPage = async ({
	className,
	id,
}: FeaturesPersonPageProps) => {
	const { profession, photo, name, enName } = await getPerson(id);
	return (
		<div className={clsx(styles.featuresPersonPage, className)}>
			<SetFavouritePerson
				size="size_52"
				theme="textBelow"
				className={styles.feature}
			/>
			<AddToFoldersPersonModal
				size="size_52"
				theme="textBelow"
				profession={profession}
				poster={photo}
				secondaryTitle={name ?? enName}
				className={styles.feature}
			/>
		</div>
	);
};
