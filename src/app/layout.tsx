import '@/styles/main.scss';

import NextTopLoader from 'nextjs-toploader';

import type { Metadata } from 'next';

import { Open_Sans } from 'next/font/google';

import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

const openSans = Open_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600', '700'],
});

export function generateMetadata(): Metadata {
	const isMobile = deviceDetectServer();
	return {
		title: 'KinoStar',
		description:
			'Поиск фильмов, новости кино, отзывы пользователей, афиша кинотеатров, фотографии, постеры, трейлеры, кассовые сборы и многое другое.',
		viewport: isMobile
			? 'initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width'
			: 'width=device-width',
	};
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isMobile = deviceDetectServer();
	// * на самом деле мне сейчас решение с контейнером не нравится, так что потом надо подумать, как это лучше сделать

	return (
		<html lang='ru'>
			<body
				className={clsx(openSans.className, {
					full: !isMobile,
				})}>
				<NextTopLoader
					color='#f50'
					initialPosition={0.08}
					crawlSpeed={200}
					height={3}
					crawl={true}
					showSpinner={false}
					easing='ease'
					speed={200}
				/>
				<div
					className={styles.root}
					id='root'>
					<Header />
					<div
						className={clsx('container', styles.container, {
							[styles.containerFull]: !isMobile,
						})}>
						{children}
					</div>
					<Footer />
				</div>
				<div
					id='modal-root'
					className={styles.modalRoot}></div>
				<div
					id='popover-root'
					className={styles.popoverRoot}></div>
			</body>
		</html>
	);
}
