import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { SetFavouritePerson } from '@/features/SetFavouritePerson';
import { AddToFoldersPersonModal } from '@/features/AddToFoldersPerson/ui/AddToFoldersPersonModal';
import { getPerson } from '@/app/(main-root)/(page-id)/api/getPerson';

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
				theme='textBelow'
				className={styles.feature}
			/>
			<AddToFoldersPersonModal
				profession={profession}
				poster={photo}
				secondaryTitle={name || enName}
				className={styles.feature}
			/>
		</div>
	);
};
