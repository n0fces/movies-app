import { clsx } from 'clsx';
import Link from 'next/link';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { RoutesEnum } from '@/shared/routes';

import styles from './styles.module.scss';

interface ListItemProps {
	text: string;
	href: string;
}

const list: ListItemProps[] = [
	{
		href: 'https://yandex.ru/jobs/vacancies?services=kinopoisk',
		text: 'Вакансии',
	},
	{
		href: 'https://yandex.ru/adv/products/display/kinopoiskmedia',
		text: 'Реклама',
	},
	{
		href: 'https://www.yandex.ru/legal/kinopoisk_termsofuse/',
		text: 'Соглашение',
	},
	{
		href: 'https://www.kinopoisk.ru/legal/recommendations/ru/',
		text: 'Правила рекомендаций',
	},
	{
		href: 'https://yandex.ru/support/kinopoisk/index.html',
		text: 'Справка',
	},
	{
		href: 'https://www.kinopoisk.ru/media/rubric/19/',
		text: 'Блог',
	},
	{
		href: 'https://www.kinopoisk.ru/special/index/#/?dateFrom=2024-01-22&dateTo=2024-01-28',
		text: 'Кинопоиск PRO',
	},
	{
		href: 'https://kinopoisk.userecho.com/',
		text: 'Предложения',
	},
	{
		href: RoutesEnum.Films,
		text: 'Все фильмы',
	},
	{
		href: RoutesEnum.Series,
		text: 'Все сериалы',
	},
];

const ListItem = ({ href, text }: ListItemProps) => (
	<li className={styles.contentMenuItem}>
		<Link href={href} target="_blank">
			{text}
		</Link>
	</li>
);

export const ContentLinks = () => {
	const isMobile = deviceDetectServer();

	return (
		<ul
			className={clsx(styles.contentMenu, {
				[styles.column]: isMobile,
			})}>
			{list.map((item, index) => (
				<ListItem key={index} {...item} />
			))}
		</ul>
	);
};
