import { cache } from 'react';

import { api } from '@/shared/api';
import { SearchMovies } from '@/shared/types';

import { getTop10KP } from './getTop10KP';

export const getSearch = cache(async (query?: string, limit = 8) => {
	if (query) {
		const { data } = await api.get<SearchMovies>('v1.4/movie/search', {
			params: {
				query,
				page: 1,
				limit,
			},
		});
		return data.docs;
	} else {
		return (await getTop10KP()).slice(0, limit);
	}
});
