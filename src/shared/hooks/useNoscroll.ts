import { useEffect } from 'react';

export const useNoscroll = (isMobile: boolean, isOpen: boolean) => {
	useEffect(() => {
		if (isMobile) {
			const root = document.body;
			if (isOpen) {
				root.classList.add('noscroll');
			} else {
				root.classList.remove('noscroll');
			}
		}
	}, [isOpen, isMobile]);
};
