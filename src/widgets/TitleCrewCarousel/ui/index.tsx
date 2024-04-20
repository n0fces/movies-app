import { getTitle } from '@/app/(page-id)/api/getTitle';
import { Title } from '@/shared/ui/Title';
import { clsx } from 'clsx';
import Link from 'next/link';
import { getArrayStuffForRender } from '../lib/getArrayStuffForRender';
import { TitleCrewItem } from './TitleCrewItem';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui/Button';

export type TitleCrewCarouselType = 'actors' | 'creators';

interface TitleCrewCarouselProps {
	className?: string;
	id: number;
	href: string;
	type?: TitleCrewCarouselType;
}

export const TitleCrewCarousel = async ({
	className,
	id,
	href,
	type = 'actors',
}: TitleCrewCarouselProps) => {
	const { persons } = await getTitle(id);
	const stuff = getArrayStuffForRender(type, persons);

	return stuff ? (
		<div className={clsx(styles.titleCrewCarousel, className)}>
			<div className={styles.heading}>
				<Title
					size='small'
					as='h3'>
					{type === 'actors' ? 'Актёры' : 'Создатели'}
				</Title>
				<Button
					component={Link}
					theme='orange'
					href={href}
					className={styles.allLinkCast}>
					Все
				</Button>
			</div>
			<div className={styles.cast}>
				<ul
					className={clsx(styles.list, {
						[styles.listActors]: type === 'actors',
						[styles.listCreators]: type === 'creators',
					})}>
					{stuff.map((item) => (
						<li
							key={item.id}
							className={styles.listItem}>
							<TitleCrewItem
								personInfo={item}
								type={type}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	) : null;
};
