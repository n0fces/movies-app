import Link from 'next/link';
import { Suspense } from 'react';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { CardItemEntity } from '@/shared/types';
import { Carousel } from '@/shared/ui/Carousel';
import { Icon } from '@/shared/ui/Icon';
import { Title } from '@/shared/ui/Title';

import { BlockSliderSkeleton } from './BlockSliderSkeleton';
import { Card } from './Card/Card';
import styles from './styles.module.scss';

interface BlockSliderProps {
	text: string;
	href?: string;
	dataProvider: () => Promise<CardItemEntity[]> | CardItemEntity[];
	widthForPoster: number;
	heightForPoster: number;
}

async function BlockSliderLoaded({
	text,
	dataProvider,
	href,
	widthForPoster,
	heightForPoster,
}: BlockSliderProps) {
	const isMobile = deviceDetectServer();
	const buttonsPosition = `
	.${styles.section} button {
		top: ${heightForPoster / 32}rem !important;
	}`;

	const data =
		typeof dataProvider === 'function' ? await dataProvider() : dataProvider;

	return (
		<section className={styles.section}>
			<style>{buttonsPosition}</style>
			<Title size="medium" as="h2" className={styles.title}>
				{href ? (
					<Link href={href} className={styles.link}>
						{text} <Icon name="arrow-link" className={styles.arrowLink} />
					</Link>
				) : (
					text
				)}
			</Title>
			<Carousel ariaLabel={text} isMobile={isMobile}>
				{data?.map((item) => (
					<Card
						key={item.id}
						width={widthForPoster}
						height={heightForPoster}
						{...item}
					/>
				))}
			</Carousel>
		</section>
	);
}

export const BlockSlider = (props: BlockSliderProps) => {
	return (
		// * потом от этого дива будет задаваться внешняя геометрия
		<div>
			<Suspense
				fallback={
					<BlockSliderSkeleton
						countCards={5}
						width={props.widthForPoster}
						height={props.heightForPoster}
					/>
				}>
				<BlockSliderLoaded {...props} />
			</Suspense>
		</div>
	);
};
