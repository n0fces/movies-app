import styles from './styles.module.scss';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
// * все-таки неплохая идея сконцентрировать все запросы внутри shared/api)
import { clsx } from 'clsx';
import { Navigation } from '@/entities/Navigation';
import { BlockSlider } from '@/widgets/BlockSlider';
import { getInCinema } from '@/widgets/BlockSlider/api/getInCinema';

export default function Home() {
	const isMobile = deviceDetectServer();

	return (
		<div className={styles.middleContainer}>
			{!isMobile && (
				<aside className={styles.aside}>
					<div className={styles.sticky}>
						<Navigation />
					</div>
				</aside>
			)}
			<main
				className={clsx(styles.main, {
					[styles.mainFull]: !isMobile,
				})}>
				<BlockSlider
					text='Билеты в кино'
					href='https://www.kinopoisk.ru/afisha/new/city/6101/'
					dataProvider={getInCinema}
					widthForPoster={isMobile ? 128 : 150}
					heightForPoster={isMobile ? 192 : 225}
				/>
			</main>
		</div>
	);
}
