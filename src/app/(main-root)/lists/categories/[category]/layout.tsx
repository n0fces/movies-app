import { Metadata } from 'next';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { CategoriesType } from '@/shared/types';
import { Title } from '@/shared/ui/Title';

import styles from './styles.module.scss';
import { SelectCategories } from './ui/SelectCategories';

export const metadata: Metadata = {
	title: 'Смотреть онлайн лучшие фильмы и сериалы',
};

export default function CategoriesLayout({
	params: { category },
	children,
}: {
	children: React.ReactNode;
	params: { category: CategoriesType };
}) {
	const isMobile = deviceDetectServer();
	return (
		<main className={styles.main}>
			<div className={!isMobile ? styles.header : undefined}>
				<div className={!isMobile ? styles.titleContainer : undefined}>
					<Title size="large" as="h1">
						Списки
					</Title>
				</div>
				<SelectCategories route={category} />
			</div>
			{children}
		</main>
	);
}
