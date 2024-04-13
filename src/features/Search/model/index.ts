import { useEffect } from 'react';

import {
	useInputValue,
	useIsChange,
	useIsOpen,
	useSetters,
	useSuggests,
} from './context';

export const useModel = () => {
	const { setSuggests, setIsLoading, setIsChange } = useSetters();
	const value = useInputValue();
	const isOpen = useIsOpen();
	const isChange = useIsChange();
	const suggests = useSuggests();

	useEffect(() => {
		let controller: AbortController | undefined;
		if (isOpen && (isChange || suggests.length === 0)) {
			controller = new AbortController();
			const signal = controller.signal;
			setIsLoading(true);
			(async () => {
				try {
					const response = await fetch('/api/search', {
						method: 'POST',
						body: JSON.stringify(value),
						signal,
					});
					const res = await response.json();
					setSuggests(res);
				} catch (error) {
					if (!signal.aborted) {
						console.error(error);
					}
				} finally {
					setIsChange(false);
					setIsLoading(false);
				}
			})();
		}

		return () => {
			if (value !== '' && controller !== undefined) {
				controller.abort();
			}
		};
	}, [
		value,
		setIsLoading,
		setSuggests,
		isChange,
		isOpen,
		suggests.length,
		setIsChange,
	]);
};
