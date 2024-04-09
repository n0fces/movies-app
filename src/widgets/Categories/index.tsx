import { CategoryItem } from '@/entities/CategoryItem';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { CategoriesType } from '@/shared/types';
import { clsx } from 'clsx';
import { Suspense } from 'react';
import { getCategories } from './api/getCategories';
import styles from './styles.module.scss';
import { CategoriesSkeleton } from './ui/CategoriesSkeleton';

interface CategoryProps {
	category: CategoriesType;
}

async function CategoryObj({ category }: CategoryProps) {
	const categoriesDict = {
		movies: 'Фильмы',
		series: 'Сериалы',
		'online-cinema': 'Онлайн-кинотеатр',
		fees: 'Сборы',
		awards: 'Премии',
	};
	const categories = await getCategories(categoriesDict[category]);

	return (
		<div className={styles.wrapperItems}>
			{categories?.map((category) => (
				<CategoryItem
					key={category.slug}
					{...category}
				/>
			))}
		</div>
	);
}

export const Categories = (props: CategoryProps) => {
	const isMobile = deviceDetectServer();
	return (
		<div
			className={clsx(styles.content, {
				[styles.gap]: !isMobile,
			})}>
			<div className={styles.titles}>
				<span className={styles.title}>Список</span>
				{/* Эта штука появляется тогда, когда пользователь авторизован */}
				{/* <span className={styles.title}>Просмотрено</span> */}
			</div>
			<Suspense
				fallback={
					<CategoriesSkeleton
						width={88}
						height={88}
						count={10}
					/>
				}>
				<CategoryObj {...props} />
			</Suspense>
		</div>
	);
};
