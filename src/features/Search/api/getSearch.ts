import { cache } from 'react';
import { getTop10KP } from './getTop10KP';
import { api } from '@/shared/api';
import { SearchMovies } from '@/shared/types';

export const getSearch = cache(async (query?: string, limit = 8) => {
	try {
		if (query) {
			const { data } = await api.get<SearchMovies>('v1.4/movie/search', {
				params: {
					query,
					page: 1,
					limit,
					timeout: 60000,
				},
			});
			return data.docs;
		} else {
			return (await getTop10KP()).slice(0, 8);
		}
	} catch (error) {
		throw error;
	}
});
