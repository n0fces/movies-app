'use client';

import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { sortTypes } from '@/shared/constants/sortTypes';
import { useSearchParams } from 'next/navigation';
import { useModel } from '../model';
import { Select } from '@/shared/ui/Select';

interface SelectSortTypeProps {
	className?: string;
	isMobile: boolean;
}

export const SelectSortType = ({
	className,
	isMobile,
}: SelectSortTypeProps) => {
	const model = useModel();
	const searchParams = useSearchParams();

	return (
		<Select
			className={clsx(className, {
				[styles.root]: !isMobile,
				[styles.rootSmall]: isMobile,
			})}
			options={sortTypes}
			value={searchParams.get('sortField') ?? undefined}
			description='Выбор категории: сортировка'
			name='sortField'
			position='right'
			action={model('sortField')}
		/>
	);
};
