import Link from 'next/link';
import styles from './styles.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { clsx } from 'clsx';

interface SocialItem {
	href: string;
	label: string;
	name: 'vk' | 'twitter' | 'telegram' | 'youtube';
}

const list: SocialItem[] = [
	{
		href: 'https://vk.com/kinopoisk',
		label: 'Страница Кинопоиска в социальной сети ВКонтакте',
		name: 'vk',
	},
	{
		href: 'https://twitter.com/kinopoiskru',
		label: 'Страница Кинопоиска в социальной сети Twitter',
		name: 'twitter',
	},
	{
		href: 'https://telegram.me/kinopoisk',
		label: 'Telegram канал Кинопоиска',
		name: 'telegram',
	},
	{
		href: 'https://www.youtube.com/user/kinopoisk',
		label: 'Youtube канал Кинопоиска',
		name: 'youtube',
	},
];

const SocialLink = ({ href, label, name }: SocialItem) => {
	return (
		<Link
			href={href}
			aria-label={label}
			className={styles.link}
			target='_blank'>
			<Icon name={name} />
		</Link>
	);
};

export const Social = () => {
	const isMobile = deviceDetectServer();
	return (
		<section
			className={clsx(styles.socialMenu, {
				[styles.full]: !isMobile,
			})}>
			{list.map((item, index) => (
				<SocialLink
					key={index}
					{...item}
				/>
			))}
		</section>
	);
};
