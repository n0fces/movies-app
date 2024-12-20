import { useCallback, useState } from 'react';

interface UseHoverResult {
	isHover: boolean;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export const useHover = (): UseHoverResult => {
	const [isHover, setIsHover] = useState(false);

	const onMouseEnter = useCallback(() => {
		setIsHover(true);
	}, []);
	const onMouseLeave = useCallback(() => {
		setIsHover(false);
	}, []);

	return { isHover, onMouseEnter, onMouseLeave };
};
