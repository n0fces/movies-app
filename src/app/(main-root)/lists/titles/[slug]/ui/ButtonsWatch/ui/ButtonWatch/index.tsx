'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

import { createURLSearchParams } from '../../lib/createURLSearchParams';
import styles from './styles.module.scss';

interface ButtonProps {
	watchability?: string;
	className?: string;
	text: string;
}

export const ButtonWatch = ({ watchability, className, text }: ButtonProps) => {
	const searchParams = useSearchParams();
	const params = useParams();

	// ! эта строчка кода часто повторяется в кодовой базе
	const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

	const active =
		watchability === undefined
			? !searchParams.has('watchability.items.name')
			: searchParams.has('watchability.items.name');

	return (
		<Link
			href={`/lists/titles/${slug}${createURLSearchParams(
				searchParams,
				'watchability.items.name',
				watchability ?? '',
			)}`}
			className={clsx(styles.link, className, {
				[styles.active]: active,
			})}>
			<span className={styles.category}>{text}</span>
		</Link>
	);
};
