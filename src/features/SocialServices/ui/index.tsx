import { clsx } from 'clsx';
import { headers } from 'next/headers';
import Link from 'next/link';

import { IconName } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import styles from './styles.module.scss';

interface SocialServicesProps {
	className?: string;
	text: string;
}

interface SocialServicesItem {
	socialName: string;
	enName: IconName;
	shareLink: string;
}

const SocialService = ({
	shareLink,
	socialName,
	enName,
}: SocialServicesItem) => (
	<li>
		<Button
			as={Link}
			size="size_52"
			shape="circle"
			href={shareLink}
			target="_blank"
			title={socialName}
			rel="nofollow noopener"
			className={clsx(styles.link, styles[enName])}>
			<span className="visually-hidden">{socialName}</span>
			<Icon name={enName} className={styles.icon} />
		</Button>
	</li>
);

export const SocialServices = ({ className, text }: SocialServicesProps) => {
	const headersList = headers();
	const referer = headersList.get('referer');
	const url = referer ? encodeURI(referer) : '';
	const msg = encodeURIComponent(text);

	// ! ПОЧЕМУ-ТО КАКАЯ-ТО ПРОБЛЕМА С ССЫЛКАМИ

	const socialServicesList: SocialServicesItem[] = [
		{
			socialName: 'ВКонтакте',
			enName: 'vk',
			shareLink: `https://vk.com/share.php?url=${url}`,
		},
		{
			socialName: 'Twitter',
			enName: 'twitter',
			shareLink: `http://twitter.com/share?&url=${url}&text=${msg}&hashtags=javascript,programming`,
		},
		{
			socialName: 'Telegram',
			enName: 'telegram',
			shareLink: `https://t.me/share/url?url=${url}&text=${msg}`,
		},
	];

	return (
		<ul className={clsx(styles.socialServices, className)}>
			{socialServicesList.map((socialService, index) => (
				<SocialService key={index} {...socialService} />
			))}
		</ul>
	);
};
