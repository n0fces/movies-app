import { Title } from '@/shared/ui/Title';
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './notFound.module.scss';
import { clsx } from 'clsx';
import { getRandomInt } from '@/shared/helpers/getRandomInt';
import { Icon } from '@/shared/ui/Icon';

export const metadata: Metadata = {
	title: '404 - Страница не найдена',
	description:
		'Поиск фильмов, новости кино, отзывы пользователей, афиша кинотеатров, фотографии, постеры, трейлеры, кассовые сборы и многое другое.',
};

export default function NotFound() {
	const randomGif = getRandomInt(1, 5);

	return (
		<div className={styles.notFound}>
			<div className={styles.errorContainer}>
				<div className={styles.imageLink}>
					<Link
						href='/'
						className={styles.linkMain}>
						<Icon
							name='main-logo'
							className={styles.logo}
						/>
						<span>KinoStar</span>
					</Link>
				</div>
				<div className={styles.content}>
					<div className={styles.columnLeft}>
						<Title
							size='xl'
							className={styles.title}>
							404. Страница не найдена
						</Title>
						<p className={styles.description}>
							Возможно, она была перемещена, или вы просто неверно
							указали адрес страницы.
						</p>
						<div className={styles.links}>
							<Link
								href='/'
								className={styles.link}>
								Перейти на главную
							</Link>
						</div>
					</div>
					<div className={styles.columnRight}>
						<div className={clsx('ibg', styles.videoCnt)}>
							<video
								autoPlay
								loop
								muted
								playsInline
								className={styles.video}
								src={`/error-page/${randomGif}.mp4`}></video>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
