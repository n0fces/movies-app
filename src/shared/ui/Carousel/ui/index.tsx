'use client';

import { Children } from 'react';
import styles from './styles.module.scss';
import { ContextProvider, useShare } from '../model';
import { Buttons } from './Buttons';
import { ObserverItem } from './ObserverItem';
import { clsx } from 'clsx';

interface CarouselProps {
	children: React.ReactElement[];
	ariaLabel: string;
	isMobile: boolean;
	gap?: number;
}

const CarouselObj = ({
	children,
	ariaLabel,
	isMobile,
	gap = 8,
}: CarouselProps) => {
	// * надо будет посмотреть, как это будет работать при отключенном js (оно не должно работать, просто надо посмотреть, как это будет выглядеть)
	const { carouselRef } = useShare();

	return (
		<div className={styles.carousel}>
			<div className={clsx({ [styles.scrollBarWrapper]: isMobile })}>
				<ul
					className={clsx(styles.scrollBar, {
						[styles.scrollBarSmall]: isMobile,
					})}
					style={{ columnGap: `${gap / 16}rem` }}
					role='region'
					aria-label={ariaLabel}
					aria-describedby='focus'
					tabIndex={0}
					ref={carouselRef}>
					{Children.map(children, (child, index) => (
						<ObserverItem
							index={index}
							length={children.length}>
							{child}
						</ObserverItem>
					))}
				</ul>
			</div>
			<Buttons
				ariaLabel={ariaLabel}
				isMobile={isMobile}
			/>
			<div className={styles.instructions}>
				<p id='focus'>
					Используйте клавиши со стрелками для того, чтобы увидеть
					больше
				</p>
			</div>
		</div>
	);
};

export const Carousel = (props: CarouselProps) => (
	<ContextProvider>
		<CarouselObj {...props} />
	</ContextProvider>
);
