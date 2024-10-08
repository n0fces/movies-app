export const createURLSearchParams = (
	searchParams: { [key: string]: string },
	typeParam: string,
	valueParam: string,
) => {
	const arr = [];
	let selectedParam = false;
	for (const key in searchParams) {
		if (key !== 'page') {
			if (key !== typeParam) {
				arr.push(`${key}=${searchParams[key]}`);
			} else {
				selectedParam = true;
			}
		}
	}
	if (
		(!selectedParam && valueParam !== '') ||
		(typeParam === 'watchability.items.name' && valueParam === 'Kinopoisk HD')
	) {
		arr.push(`${typeParam}=${valueParam}`);
	}

	return arr.length > 0 ? `?${arr.join('&')}` : '';
};
