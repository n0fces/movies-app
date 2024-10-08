import { cache } from 'react';

import { api } from '@/shared/api';
import { SearchMovies } from '@/shared/types';

export const getTop10KP = cache(async () => {
	const { data } = await api.get<SearchMovies>('v1.4/movie', {
		params: {
			lists: 'top10-hd',
			sortField: 'top10',
			sortType: '1',
			page: 1,
			limit: 10,
		},
	});

	return data.docs;
});
