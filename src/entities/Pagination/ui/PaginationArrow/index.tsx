import { clsx } from 'clsx';
import Link from 'next/link';

import { Icon } from '@/shared/ui/Icon';

import { PaginationProps } from '../';
import { createURLSearchParams } from '../../lib/createURLSearchParams';
import styles from './styles.module.scss';

interface PaginationArrowProps extends PaginationProps {
	type: 'Вперед' | 'Назад';
}

export const PaginationArrow = ({
	page,
	pages,
	searchParams,
	slug,
	type,
}: PaginationArrowProps) => {
	const isForward = type === 'Вперед';
	const conditional = isForward ? page !== pages : page !== 1;
	const move = isForward ? page + 1 : page - 1;

	return conditional ? (
		<Link
			href={`/lists/titles/${slug}${createURLSearchParams(
				searchParams,
				'page',
				`${move}`,
			)}`}
			className={clsx(styles.arrow, { [styles.end]: isForward })}
			title={type}>
			<Icon name="arrow-pagination" className={styles.arrowPagination} />
		</Link>
	) : null;
};
