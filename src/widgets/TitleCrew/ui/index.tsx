import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { TopListLinksBlock } from '@/entities/TopListLinksBlock';
import { getTitle } from '@/app/(page-id)/api/getTitle';
import { sortPersons } from '@/shared/helpers/sortPersons';
import { getPath } from '@/shared/helpers/getPath';
import { LinkItemPerson } from '@/features/LinkItemPopover/ui/LinkItemPerson';
import { PersonInMovie } from '@/shared/types';
import Link from 'next/link';
import { setCorrectEndWord } from '@/shared/helpers/setCorrectEndWord';

interface TitleCrewProps {
	className?: string;
	id: number;
}

interface CastBlockProps {
	array: PersonInMovie[];
	title: string;
}

const CastBlock = ({ array, title }: CastBlockProps) =>
	array.length ? (
		<TopListLinksBlock
			text={title}
			list={array.map(({ name, id, enName }, index) => {
				const text = name || enName;
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
			href='#'
			seeMoreLink={
				<Link href='#'>
					{array.length}{' '}
					{setCorrectEndWord('актер', array.length % 10)}
				</Link>
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
				title='В главных ролях'
			/>
			<CastBlock
				array={stuff.voice_actor}
				title='Роли дублировали'
			/>
		</div>
	);
};
