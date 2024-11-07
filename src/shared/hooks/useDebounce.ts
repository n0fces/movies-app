import { useRef } from 'react';

export const useDebouce = <T extends unknown[]>(
	callback: (...args: T) => void,
	delay = 300,
) => {
	const timeoutIdRef = useRef<NodeJS.Timeout | number>();

	return (...args: T) => {
		if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
		timeoutIdRef.current = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};
