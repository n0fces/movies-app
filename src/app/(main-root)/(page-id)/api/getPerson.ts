import { cache } from 'react';

import { api } from '@/shared/api';
import { Person } from '@/shared/types';

export const getPerson = cache(async (id: number) => {
	const { data } = await api.get<Person>(`v1.4/person/${id}`);
	return data;
});
