import { clsx } from 'clsx';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

import { generatePagination } from '../model';
import { PaginationArrow } from './PaginationArrow';
import { PaginationItem } from './PaginationItem';
import styles from './styles.module.scss';

export interface PaginationProps {
	pages: number;
	page: number;
	slug: string;
	searchParams: Record<string, string>;
	className?: string;
}

export const Pagination = (props: PaginationProps) => {
	const { page, pages } = props;
	const isMobile = deviceDetectServer();

	const allPages = generatePagination(page, pages, isMobile);

	return (
		<div className={clsx(styles.pagination, props.className)}>
			<PaginationArrow {...props} type="Назад" />
			<div className={styles.list}>
				{allPages.map((item, index) => {
					return (
						<PaginationItem
							key={index}
							{...props}
							allPages={allPages}
							index={index}
							item={item}
						/>
					);
				})}
			</div>
			<PaginationArrow {...props} type="Вперед" />
		</div>
	);
};
