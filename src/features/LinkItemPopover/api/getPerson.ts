import { api } from '@/shared/api';
import { cache } from 'react';
import { PersonLoaded } from '../ui/LinkItemPerson';

export const getPerson = cache(async (id: number) => {
	try {
		const { data } = await api.get<PersonLoaded>(`v1.4/person/${id}`, {
			timeout: 60000,
		});

		return data;
	} catch (error) {
		throw error;
	}
});
