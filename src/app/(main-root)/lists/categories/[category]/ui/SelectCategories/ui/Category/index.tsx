import { clsx } from 'clsx';
import Link from 'next/link';

import { CategoryItem, SelectCategoriesProps } from '..';
import styles from './styles.module.scss';

interface CategoryProps extends CategoryItem, SelectCategoriesProps {}

export const Category = ({ name, type, route }: CategoryProps) => (
	<Link
		href={`/lists/categories/${type}`}
		className={clsx(styles.category, {
			[styles.active]: type === route,
		})}>
		{name}
	</Link>
);
