import { clsx } from 'clsx';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { CategoriesName, CategoriesType } from '@/shared/types';

import { Category } from './Category';
import styles from './styles.module.scss';

export interface SelectCategoriesProps {
	route: string;
}

export interface CategoryItem {
	type: CategoriesType;
	name: CategoriesName;
}

export const SelectCategories = ({ route }: SelectCategoriesProps) => {
	const isMobile = deviceDetectServer();

	const list: CategoryItem[] = [
		{ type: 'movies', name: 'Фильмы' },
		{ type: 'series', name: 'Сериалы' },
		{ type: 'online-cinema', name: 'Онлайн-кинотеатр' },
		{ type: 'fees', name: 'Сборы' },
		{ type: 'awards', name: 'Премии' },
	];

	return (
		// * потом надо это сделать список с линками
		<div
			className={clsx(styles.selectCategories, {
				[styles.carousel]: isMobile,
			})}>
			{list.map((item, index) => (
				<Category route={route} key={index} {...item} />
			))}
		</div>
	);
};
