import { useEffect } from 'react';

import { useInputValue, useIsLoading, useSuggests } from './context';

export const useModel = () => {
	const { setIsLoading } = useIsLoading();
	const { setSuggests } = useSuggests();
	const { value } = useInputValue();

	useEffect(() => {
		const controller = new AbortController();
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
				setIsLoading(false);
			} catch (error) {
				if (signal.aborted) {
					console.log(error);
				} else {
					console.error(error);
					setIsLoading(false);
				}
			}
		})();

		return () => {
			if (value !== '') {
				controller.abort();
			}
		};
	}, [value, setIsLoading, setSuggests]);
};
