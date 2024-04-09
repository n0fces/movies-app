import { RoutesEnum } from '@/shared/routes';
import styles from './styles.module.scss';

import { NavigationItem } from './ui';
import { Item } from './types';
import { clsx } from 'clsx';

interface NavigationProps {
	isOpen?: boolean;
}

export const Navigation = ({ isOpen }: NavigationProps) => {
	const items: Item[] = [
		{ text: 'Главная', route: RoutesEnum.Home, code: 'home' },
		{ text: 'Фильмы', route: RoutesEnum.Films, code: 'movie' },
		{ text: 'Сериалы', route: RoutesEnum.Series, code: 'series' },
	];

	return (
		<nav id={typeof isOpen === 'boolean' ? 'nav-menu' : undefined}>
			<ul
				className={clsx(styles.list, {
					[styles.invert]: typeof isOpen === 'boolean',
				})}>
				{items.map((item) => (
					<NavigationItem
						{...item}
						key={item.text}
					/>
				))}
			</ul>
		</nav>
	);
};
