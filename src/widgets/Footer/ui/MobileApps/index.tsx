import Link from 'next/link';

import { Icon } from '@/shared/ui/Icon';

import styles from './styles.module.scss';

interface MobileAppsItemProps {
	href: string;
	label: string;
	name: 'app-store' | 'google-play' | 'app-gallery' | 'ru-store';
}

const list: MobileAppsItemProps[] = [
	{
		href: 'https://apps.apple.com/ru/app/%D0%BA%D0%B8%D0%BD%D0%BE%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-%D0%B8-%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/id477718890?amp%253Bat=1000lqjf&amp%253Bct=mobile&amp%253Buo=4',
		label: 'Загрузить в App Store',
		name: 'app-store',
	},
	{
		href: 'https://play.google.com/store/apps/details?id=ru.kinopoisk',
		label: 'Загрузить в Google Play',
		name: 'google-play',
	},
	{
		href: 'https://appgallery.huawei.com/?referrer=appmetrica_tracking_id%3D1179706852124993595%26ym_tracking_id%3D10544853182769908581#/app/C101036423',
		label: 'Загрузить в Huawei AppGallery',
		name: 'app-gallery',
	},
	{
		href: 'https://apps.rustore.ru/app/ru.kinopoisk?rsm=1&mt_link_id=me10h4',
		label: 'Скачайте из RuStore',
		name: 'ru-store',
	},
];

const MobileAppsItem = ({ href, label, name }: MobileAppsItemProps) => (
	<Link
		href={href}
		className={styles.mobileAppsItem}
		aria-label={label}
		target="_blank">
		<Icon name={name} />
	</Link>
);

export const MobileApps = () => {
	return (
		<div className={styles.mobileAppsMenu}>
			{list.map((item, index) => (
				<MobileAppsItem key={index} {...item} />
			))}
		</div>
	);
};
