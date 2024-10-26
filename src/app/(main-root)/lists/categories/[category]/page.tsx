import { Categories } from '@/widgets/Categories';

import { CategoriesType } from '@/shared/types';

export function generateMetadata({
	params,
}: {
	params: {
		category: CategoriesType;
	};
}) {
	const categoriesDict = {
		movies: 'Фильмы',
		series: 'Сериалы',
		'online-cinema': 'Онлайн-кинотеатр',
		fees: 'Сборы',
		awards: 'Премии',
	};
	return {
		description: `Не знаете что посмотреть? Большая коллекция фильмов, сериалов и мультфильмов на Кинопоиске. Списки в категории "${
			categoriesDict[params.category]
		}", составленные нашей редакцией и алгоритмами нашего онлайн-кинотеатра помогут вам выбрать кино для просмотра в отличном качестве`,
	};
}

export default function CategoriesPage({
	params: { category },
}: {
	params: {
		category: CategoriesType;
	};
}) {
	return <Categories category={category} />;
}
