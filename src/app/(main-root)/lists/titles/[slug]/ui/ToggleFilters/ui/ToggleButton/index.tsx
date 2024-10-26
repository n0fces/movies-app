'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

import { createURLSearchParams } from '../../lib/createURLSearchParams';
import styles from './styles.module.scss';

export interface ToggleButton {
	typeParam: string;
	valueParam: string;
	text: string;
}

export const ToggleButton = ({ typeParam, valueParam, text }: ToggleButton) => {
	const params = useParams();
	const searchParams = useSearchParams();

	const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug;

	return (
		<Link
			href={`/lists/titles/${slug}${createURLSearchParams(
				searchParams,
				typeParam,
				valueParam,
			)}`}
			className={clsx(styles.toggleButton, {
				[styles.active]: Boolean(searchParams.get(typeParam)),
			})}>
			{text}
		</Link>
	);
};
