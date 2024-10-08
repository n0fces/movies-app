import { clsx } from 'clsx';
import Link from 'next/link';

import { getPerson } from '@/app/(main-root)/(page-id)/api/getPerson';

import { AddToFoldersPersonDropdown } from '@/features/AddToFoldersPerson/ui/AddToFoldersPersonDropdown';
import { SocialServices } from '@/features/SocialServices';

import { MyImage } from '@/shared/ui/MyImage';

import styles from './styles.module.scss';

interface BasicMediaPersonProps {
	className?: string;
	id: number;
}

export const BasicMediaPerson = async ({
	className,
	id,
}: BasicMediaPersonProps) => {
	const person = await getPerson(id);
	const { photo, name, enName, profession } = person;
	const text = `${name} (${enName}): фильмы, биография, семья, фильмография — KinoStar`;

	return (
		<div className={clsx(styles.basicMediaPerson, className)}>
			<div className={styles.posterContainer}>
				<Link href={'#'}>
					<MyImage
						src={photo}
						alt={name || enName}
						width={302}
						height={453}
						className={styles.poster}
					/>
				</Link>
			</div>
			<div className={styles.userControlsContainer}>
				<AddToFoldersPersonDropdown profession={profession} />
			</div>
			<div className={styles.socialControlsContainer}>
				<SocialServices text={text} />
			</div>
		</div>
	);
};
