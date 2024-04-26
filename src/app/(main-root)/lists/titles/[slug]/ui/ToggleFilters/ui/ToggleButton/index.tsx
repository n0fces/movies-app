'use client';

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { createURLSearchParams } from '../../lib/createURLSearchParams';

export interface ToggleButton {
	typeParam: string;
	valueParam: string;
	text: string;
}

export const ToggleButton = ({ typeParam, valueParam, text }: ToggleButton) => {
	const params = useParams();
	const searchParams = useSearchParams();

	return (
		<Link
			href={`/lists/titles/${params.slug}${createURLSearchParams(
				searchParams,
				typeParam,
				valueParam
			)}`}
			className={clsx(styles.toggleButton, {
				[styles.active]: Boolean(searchParams.get(typeParam)),
			})}>
			{text}
		</Link>
	);
};
