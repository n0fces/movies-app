import { Title } from '@/shared/ui/Title';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './notFound.module.scss';

export const metadata: Metadata = {
	title: '404 - Страница не найдена',
	description:
		'Поиск фильмов, новости кино, отзывы пользователей, афиша кинотеатров, фотографии, постеры, трейлеры, кассовые сборы и многое другое.',
};

export default function NotFound() {
	return (
		<div className={styles.notFound}>
			<Title
				size='xl'
				className={styles.title}>
				404. Страница не найдена
			</Title>
			<Link
				href='/'
				className={styles.link}>
				Перейти на главную
			</Link>
		</div>
	);
}
