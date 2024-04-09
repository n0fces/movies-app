'use client';

import styles from './styles.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import { Item } from '../types';

export const NavigationItem = ({ text, route, code }: Item) => {
	const pathname = usePathname();

	return (
		<li
			className={clsx(styles.item, {
				[styles.active]: pathname === route,
			})}>
			<Link href={route}>
				<Icon name={code} className={styles.icon} />
				<span>{text}</span>
			</Link>
		</li>
	);
};
