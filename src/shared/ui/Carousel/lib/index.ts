import { RefObject } from 'react';

export const clickSwipe = (
	type: 'left' | 'right',
	carouselRef: RefObject<HTMLUListElement>,
) => {
	if (carouselRef.current !== null) {
		const visibleItems = document.querySelectorAll('.visible');
		const lastVisible = visibleItems[visibleItems.length - 1];
		const firstVisible = document.querySelectorAll('.visible')[0];

		const scroll =
			type === 'right'
				? lastVisible.getBoundingClientRect().left -
					carouselRef.current.getBoundingClientRect().left
				: firstVisible.getBoundingClientRect().right -
					carouselRef.current.getBoundingClientRect().right;

		carouselRef.current.scrollBy({
			top: 0,
			left: scroll,
			behavior: 'smooth',
		});
	}
};
