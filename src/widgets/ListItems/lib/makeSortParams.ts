export const makeSortParams = (
	lists: string,
	searchParams: { [key: string]: string },
) => {
	const arr: string[][] = [[], []];
	if (Boolean(searchParams['sortField'])) {
		arr[0].push(searchParams['sortField']);
		searchParams['sortField'] === 'name' ? arr[1].push('1') : arr[1].push('-1');
	} else {
		if (lists === 'top250' || lists === 'series-top250' || lists === 'top500') {
			arr[0].push('top250');
			arr[1].push('1');
		} else if (lists.startsWith('box-usa')) {
			arr[0].push('fees.usa.value');
			arr[1].push('-1');
		} else if (lists.startsWith('box-russia')) {
			arr[0].push('fees.russia.value');
			arr[1].push('-1');
		} else if (lists.startsWith('box-world')) {
			arr[0].push('fees.world.value');
			arr[1].push('-1');
		} else if (lists.startsWith('box-offline-audience-ussr')) {
			arr[0].push('audience.count');
			arr[1].push('-1');
		} else if (lists.startsWith('most-expensive')) {
			arr[0].push('budget.value');
			arr[1].push('-1');
		}
	}

	return arr;
};
