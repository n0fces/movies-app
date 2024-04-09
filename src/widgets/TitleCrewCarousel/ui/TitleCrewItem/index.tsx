import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { PersonInMovie } from '@/shared/types';
import { TitleCrewCarouselType } from '../';
import { MyImage } from '@/shared/ui/MyImage';
import Link from 'next/link';
import { getPath } from '@/shared/helpers/getPath';

interface TitleCrewItemProps {
	className?: string;
	personInfo: PersonInMovie;
	type?: TitleCrewCarouselType;
}

export const TitleCrewItem = ({
	className,
	personInfo,
	type = 'actors',
}: TitleCrewItemProps) => {
	const { photo, id, name, enName, description, profession } = personInfo;
	const personName = name || enName;
	const subtitle =
		type === 'actors'
			? description
			: profession[0].toUpperCase() + profession.slice(1);

	return (
		<Link
			href={getPath.person(id)}
			className={clsx(styles.titleCrewItem, className)}>
			{photo && (
				<MyImage
					alt={personName}
					src={photo}
					width={40}
					height={60}
					className={styles.image}
				/>
			)}
			<div className={styles.content}>
				{personName && <div className={styles.title}>{personName}</div>}
				<div className={styles.subtitle}>{subtitle}</div>
			</div>
		</Link>
	);
};
