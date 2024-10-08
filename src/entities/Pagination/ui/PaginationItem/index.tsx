import { clsx } from 'clsx';
import Link from 'next/link';

import { PaginationProps } from '..';
import { createURLSearchParams } from '../../lib/createURLSearchParams';
import styles from './styles.module.scss';

interface PaginationItemProps extends PaginationProps {
	item: number | '...';
	index: number;
	allPages: (number | '...')[];
}

export const PaginationItem = ({
	allPages,
	index,
	item,
	searchParams,
	slug,
	page,
}: PaginationItemProps) => {
	let numberPage =
		item !== '...'
			? item
			: index === allPages.length - 2
				? Number(allPages[index - 1]) + 1
				: Number(allPages[index + 1]) - 1;

	return (
		<Link
			href={`/lists/titles/${slug}${createURLSearchParams(
				searchParams,
				'page',
				`${numberPage}`,
			)}`}
			key={index}
			title={item === '...' ? `${numberPage} страница` : ''}
			className={clsx(styles.button, {
				[styles.active]: item === page,
			})}>
			{item}
		</Link>
	);
};
