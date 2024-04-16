import { api } from '@/shared/api';
import { Movie } from '@/shared/types';
import { cache } from 'react';

export const getTitle = cache(async (id: number) => {
	try {
		const { data } = await api.get<Movie>(`v1.4/movie/${id}`, {
			timeout: 60000,
		});

		return data;
	} catch (error) {
		throw error;
	}
});
