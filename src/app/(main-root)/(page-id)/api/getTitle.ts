import { cache } from 'react';

import { api } from '@/shared/api';
import { Movie } from '@/shared/types';

export const getTitle = cache(async (id: number) => {
	const { data } = await api.get<Movie>(`v1.4/movie/${id}`);
	return data;
});
