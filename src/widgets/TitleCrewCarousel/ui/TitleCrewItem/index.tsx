import { clsx } from 'clsx';
import Link from 'next/link';

import { getPath } from '@/shared/helpers/getPath';
import { PersonInMovie } from '@/shared/types';
import { MyImage } from '@/shared/ui/MyImage';

import { TitleCrewCarouselType } from '../';
import styles from './styles.module.scss';

interface TitleCrewItemProps {
	className?: string;
	/**
	 * информация о конкретном участнике состава фильма или сериала
	 */
	personInfo: PersonInMovie;
	/**
	 * в зависимости от типа карусели будет различаться описание участника профессионального состава
	 */
	type?: TitleCrewCarouselType;
}

export const TitleCrewItem = ({
	className,
	personInfo,
	type = 'actors',
}: TitleCrewItemProps) => {
	const { photo, id, name, enName, description, profession } = personInfo;
	const personName = name ?? enName;
	const customPros = profession
		? profession[0].toUpperCase() + profession.slice(1)
		: null;
	const subtitle = type === 'actors' ? description : customPros;

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
