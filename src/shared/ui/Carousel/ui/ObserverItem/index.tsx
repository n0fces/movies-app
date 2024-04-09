'use client';

import { useEffect, useRef } from 'react';
import { useShare } from '../../model';
import styles from './styles.module.scss';

interface ObserverItemProps {
	children: JSX.Element;
	index: number;
	length: number;
}

export const ObserverItem = ({
	children,
	index,
	length,
}: ObserverItemProps) => {
	const { carouselRef, leftButtonRef, rightButtonRef } = useShare();
	const ref = useRef<HTMLLIElement | null>(null);

	useEffect(() => {
		const carouselObserver = new IntersectionObserver(
			([entry]) => {
				entry.isIntersecting
					? entry.target.classList.add('visible')
					: entry.target.classList.remove('visible');

				if (index === 0 && entry.intersectionRatio < 0.75) {
					leftButtonRef.current?.classList.add(styles.visible);
				}
				if (index === 0 && entry.intersectionRatio >= 0.75) {
					leftButtonRef.current?.classList.remove(styles.visible);
				}

				if (index === length - 1 && entry.intersectionRatio < 0.75) {
					rightButtonRef.current?.classList.add(styles.visible);
				}
				if (index === length - 1 && entry.intersectionRatio >= 0.75) {
					rightButtonRef.current?.classList.remove(styles.visible);
				}
			},
			{
				root: carouselRef.current,
				threshold: [0, 0.75],
			}
		);

		// * В будущем нужно будет подумать над следующим. Может стоит сделать еще два обсервера, но уже конкретно для первого и последнего элемента карусели, чтобы только там два раза срабатывали колбэки (threshold: [0, 0.75]). Сейчас у меня для каждого элемента карусели будет выполняться данный колбэк

		carouselObserver.observe(ref.current!);

		const refVar = ref.current;
		return () => {
			carouselObserver.unobserve(refVar!);
		};
	}, [carouselRef, index, leftButtonRef, length, rightButtonRef]);

	return <li ref={ref}>{children}</li>;
};
