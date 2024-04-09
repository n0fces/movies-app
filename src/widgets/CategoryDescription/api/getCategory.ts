import { api } from '@/shared/api';
import { List } from '@/shared/types';
import { cache } from 'react';

export const getCategory = cache(async (slug: string) => {
	try {
		const { data } = await api.get<List>(`v1.4/list/${slug}`, {
			timeout: 60000,
		});

		return data;
	} catch (error) {
		throw error;
	}
});
