import { api } from '@/shared/api';
import { Person } from '@/shared/types';
import { cache } from 'react';

export const getPerson = cache(async (id: number) => {
	try {
		const { data } = await api.get<Person>(`v1.4/person/${id}`, {
			timeout: 60000,
		});

		return data;
	} catch (error) {
		throw error;
	}
});
