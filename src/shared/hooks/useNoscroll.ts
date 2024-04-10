import { useEffect } from 'react';

export const useNoscroll = (isMobile: boolean, isOpen: boolean) => {
	useEffect(() => {
		if (isMobile) {
			const root = document.getElementById('root')!;
			isOpen
				? root.classList.add('noscroll')
				: root.classList.remove('noscroll');
		}
	}, [isOpen, isMobile]);
};
