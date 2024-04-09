import { useEffect } from "react";

export const useNoscroll = (isMobile: boolean, isOpen: boolean) => {
	useEffect(() => {
		if (isMobile) {
			const body = document.body;
			isOpen
				? body.classList.add('noscroll')
				: body.classList.remove('noscroll');
		}
	}, [isOpen, isMobile]);
}