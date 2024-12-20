'use client';

import { ReactElement, useEffect, useRef } from 'react';

import { useShare } from '../../model';
import styles from './styles.module.scss';

interface ObserverItemProps {
	children: ReactElement;
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
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				} else {
					entry.target.classList.remove('visible');
				}
			},
			{
				root: carouselRef.current,
			},
		);

		let carouselObserverFirstItem: IntersectionObserver | undefined;
		if (index === 0) {
			carouselObserverFirstItem = new IntersectionObserver(
				([entry]) => {
					if (entry.intersectionRatio < 0.75) {
						leftButtonRef.current?.classList.add(styles.visible);
					}
					if (entry.intersectionRatio >= 0.75) {
						leftButtonRef.current?.classList.remove(styles.visible);
					}
				},
				{
					root: carouselRef.current,
					threshold: [0.75],
				},
			);
		}

		let carouselObserverLastItem: IntersectionObserver | undefined;
		if (index === length - 1) {
			carouselObserverLastItem = new IntersectionObserver(
				([entry]) => {
					if (entry.intersectionRatio < 0.75) {
						rightButtonRef.current?.classList.add(styles.visible);
					}
					if (entry.intersectionRatio >= 0.75) {
						rightButtonRef.current?.classList.remove(styles.visible);
					}
				},
				{
					root: carouselRef.current,
					threshold: [0.75],
				},
			);
		}

		const refVar = ref.current;

		if (refVar) {
			carouselObserver.observe(refVar);
			if (carouselObserverFirstItem !== undefined) {
				carouselObserverFirstItem.observe(refVar);
			}
			if (carouselObserverLastItem !== undefined) {
				carouselObserverLastItem.observe(refVar);
			}
		}

		return () => {
			if (refVar) {
				carouselObserver.unobserve(refVar);
				if (carouselObserverFirstItem !== undefined) {
					carouselObserverFirstItem.unobserve(refVar);
				}
				if (carouselObserverLastItem !== undefined) {
					carouselObserverLastItem.unobserve(refVar);
				}
			}
		};
	}, [carouselRef, index, leftButtonRef, length, rightButtonRef]);

	return <li ref={ref}>{children}</li>;
};
