import { getPerson } from '@/app/(page-id)/(person-page)/api/getPerson';
import { MyImage } from '@/shared/ui/MyImage';
import { clsx } from 'clsx';
import Link from 'next/link';
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
	const { photo, name, enName } = person;

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
			<div className={styles.userControlsContainer}></div>
			<div className={styles.socialControlsContainer}></div>
		</div>
	);
};
