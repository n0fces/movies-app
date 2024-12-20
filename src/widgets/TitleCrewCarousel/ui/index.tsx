import { clsx } from 'clsx';
import Link from 'next/link';

import { getTitle } from '@/app/(main-root)/(page-id)/api/getTitle';

import { Button } from '@/shared/ui/Button';
import { Title } from '@/shared/ui/Title';

import { getArrayStuffForRender } from '../lib/getArrayStuffForRender';
import { TitleCrewItem } from './TitleCrewItem';
import styles from './styles.module.scss';

export type TitleCrewCarouselType = 'actors' | 'creators';

interface TitleCrewCarouselProps {
	className?: string;
	/**
	 * По id будет сделан запрос для получения информации о фильме (в частности, информацию профессиональном составе)
	 */
	id: number;
	/**
	 * Ссылка на страницу со всем профессиональным составом
	 */
	href: string;
	/**
	 * Тип роли (актеры или создатели)
	 */
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
				<Title size="small" as="h3">
					{type === 'actors' ? 'Актёры' : 'Создатели'}
				</Title>
				<Button
					as={Link}
					theme="moreButton"
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
						<li key={item.id} className={styles.listItem}>
							<TitleCrewItem personInfo={item} type={type} />
						</li>
					))}
				</ul>
			</div>
		</div>
	) : null;
};
