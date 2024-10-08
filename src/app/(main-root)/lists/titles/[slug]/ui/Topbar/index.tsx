import { clsx } from 'clsx';
import Link from 'next/link';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { Icon } from '@/shared/ui/Icon';

import styles from './styles.module.scss';

interface LinkItemProps {
	href: string;
	text: string;
}

const LinkItem = ({ href, text }: LinkItemProps) => (
	<Link href={href} className={styles.link}>
		{text}
	</Link>
);

export const Topbar = () => {
	const isMobile = deviceDetectServer();

	const list: LinkItemProps[] = [
		{ href: '/lists/titles/top250', text: 'Топ 250 фильмов' },
		{ href: '/lists/titles/series-top250', text: 'Топ 250 сериалов' },
		{ href: '/lists/categories/online-cinema', text: 'Онлайн-кинотеатр' },
		{ href: '/navigator', text: 'Навигатор' },
	];

	return (
		<div
			className={clsx(styles.topbarSlot, {
				[styles.topBarFull]: !isMobile,
			})}>
			<Link
				href={'/lists/categories/movies'}
				className={styles.link + ' ' + styles.breadcrumbs}>
				Все списки
				<Icon name="all-lists" className={styles.allLists} />
			</Link>
			{!isMobile && (
				<ul className={styles.list}>
					{list.map((item, index) => (
						<LinkItem key={index} {...item} />
					))}
				</ul>
			)}
		</div>
	);
};
