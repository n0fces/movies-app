import { clsx } from 'clsx';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

import styles from './styles.module.scss';
import { ToggleButton } from './ui/ToggleButton';

export const ToggleFilters = () => {
	const isMobile = deviceDetectServer();

	const list: ToggleButton[] = [
		{
			typeParam: 'type',
			valueParam: 'movie',
			text: 'Фильмы',
		},
		{
			typeParam: 'isSeries',
			valueParam: 'true',
			text: 'Сериалы',
		},
		{
			typeParam: 'rating.kp',
			valueParam: '7.0-10',
			text: 'С высоким рейтингом',
		},
		{
			typeParam: 'premiere.world',
			valueParam: `01.01.1874-${new Date().toLocaleDateString('ru-RU')}`,
			text: 'Вышедшие',
		},
		{
			typeParam: 'ticketsOnSale',
			valueParam: 'true',
			text: 'Билеты в кино',
		},
	];

	return (
		<div
			className={clsx(styles.filters, {
				[styles.wrap]: !isMobile,
			})}>
			{list.map((item, index) => (
				<ToggleButton key={index} {...item} />
			))}
		</div>
	);
};
