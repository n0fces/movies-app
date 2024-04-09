import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Icon } from '@/shared/ui/Icon';
import Link from 'next/link';
import { headers } from 'next/headers';
import { IconName, Movie } from '@/shared/types';

interface SocialServicesProps
	extends Pick<
		Movie,
		'name' | 'year' | 'seasonsInfo' | 'releaseYears' | 'isSeries'
	> {
	className?: string;
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
	<li className={styles.service}>
		<Link
			href={shareLink}
			target='_blank'
			title={socialName}
			rel='nofollow noopener'
			className={clsx(styles.link, styles[enName])}>
			<span className='visually-hidden'>{socialName}</span>
			<Icon
				name={enName}
				className={styles.icon}
			/>
		</Link>
	</li>
);

export const SocialServices = ({
	className,
	name,
	isSeries,
	releaseYears,
	seasonsInfo,
	year,
}: SocialServicesProps) => {
	const headersList = headers();
	const url = encodeURI(headersList.get('referer')!);
	const text = isSeries
		? `${name}, (сериал, 1-${seasonsInfo?.length} сезоны, все серии), ${releaseYears?.[0].start}-${releaseYears?.[0].end} — Описание, интересные факты — KinoStar`
		: `${name}, ${year} — Описание, интересные факты — KinoStar`;
	const msg = encodeURIComponent(text);

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
				<SocialService
					key={index}
					{...socialService}
				/>
			))}
		</ul>
	);
};
