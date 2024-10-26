import { clsx } from 'clsx';
import Link from 'next/link';

import { getTitle } from '@/app/(main-root)/(page-id)/api/getTitle';

import { LinkItemPerson } from '@/features/LinkItemPopover/ui/LinkItemPerson';

import { TopListLinksBlock } from '@/entities/TopListLinksBlock';

import { getPath } from '@/shared/helpers/getPath';
import { setCorrectEndWord } from '@/shared/helpers/setCorrectEndWord';
import { sortPersons } from '@/shared/helpers/sortPersons/sortPersons';
import { PersonInMovie } from '@/shared/types';

import styles from './styles.module.scss';

interface TitleCrewProps {
	className?: string;
	id: number;
}

interface CastBlockProps {
	array: PersonInMovie[];
	castBlockConstaint?: number;
	title: string;
}

const CastBlock = ({ array, title, castBlockConstaint = 3 }: CastBlockProps) =>
	array.length ? (
		<TopListLinksBlock
			text={title}
			list={array
				.slice(0, castBlockConstaint)
				.map(({ name, id, enName }, index) => {
					const text = name ?? enName;
					if (text && id) {
						return (
							<LinkItemPerson
								key={index}
								href={getPath.person(id)}
								name={text}
								id={id}
							/>
						);
					} else {
						return null;
					}
				})}
			href="#"
			seeMoreLink={
				array.length > castBlockConstaint ? (
					<Link href="#">
						{array.length} {setCorrectEndWord('актер', array.length % 10)}
					</Link>
				) : null
			}
		/>
	) : null;

export const TitleCrew = async ({ className, id }: TitleCrewProps) => {
	const { persons } = await getTitle(id);
	const stuff = sortPersons(persons);

	return (
		<div className={clsx(styles.titleCrew, className)}>
			<CastBlock
				array={stuff.actor}
				castBlockConstaint={10}
				title="В главных ролях"
			/>
			<CastBlock
				array={stuff.voice_actor}
				castBlockConstaint={5}
				title="Роли дублировали"
			/>
		</div>
	);
};
