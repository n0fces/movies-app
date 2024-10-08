import { clsx } from 'clsx';
import Link from 'next/link';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { getCurrentYear } from '@/shared/helpers/getCurrentYear';

import styles from './styles.module.scss';

interface BottomSectionItemProps {
	href: string;
	text: string;
}

const list: BottomSectionItemProps[] = [
	{
		href: 'https://tv.yandex.ru/',
		text: 'Телепрограмма',
	},
	{
		href: 'https://music.yandex.ru/home',
		text: 'Музыка',
	},
	{
		href: 'https://afisha.yandex.ru/',
		text: 'Афиша',
	},
	{
		href: 'https://bookmate.ru/',
		text: 'Букмейт',
	},
];

const BottomSectionItem = ({ href, text }: BottomSectionItemProps) => (
	<li className={styles.bottomSectionItem}>
		<Link href={href} target="_blank">
			{text}
		</Link>
	</li>
);

export const BottomSections = () => {
	const isMobile = deviceDetectServer();

	return (
		<section
			className={clsx(styles.bottomSection, {
				[styles.mobile]: isMobile,
			})}>
			<div className={styles.bottomSectionInfo}>
				<span className={styles.year}>©&nbsp;2023 — {getCurrentYear()},</span>
				<Link href={'/'} target="_blank" className={styles.link}>
					KinoStar
				</Link>
				{!isMobile && <span className={styles.age}>18+</span>}
			</div>
			{!isMobile && (
				<ul className={styles.bottomSectionMenu}>
					{list.map((item, index) => (
						<BottomSectionItem key={index} {...item} />
					))}
				</ul>
			)}
			<div className={styles.companySection}>
				<span>Проект компании KinoStar</span>
			</div>
		</section>
	);
};
