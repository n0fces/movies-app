import { ReadonlyURLSearchParams } from 'next/navigation';

export const createURLSearchParams = (
	searchParams: ReadonlyURLSearchParams,
	typeParam: string,
	valueParam: string,
) => {
	const arr = [];
	let selectedParam = false;
	for (const [key, value] of searchParams.entries()) {
		if (key !== 'page') {
			if (key !== typeParam) {
				arr.push(`${key}=${value}`);
			} else {
				selectedParam = true;
			}
		}
	}
	if (!selectedParam) {
		arr.push(`${typeParam}=${valueParam}`);
	}
	return arr.length > 0 ? `?${arr.join('&')}` : '';
};
