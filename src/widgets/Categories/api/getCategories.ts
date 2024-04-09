import { api } from '@/shared/api';
import { ListReq } from '@/shared/types';
import { cache } from 'react';

export const getCategories = cache(async (category: string) => {
	try {
		const { data } = await api.get<ListReq>('v1.4/list', {
			params: {
				page: 1,
				limit: 100,
				category,
			},
			timeout: 60000,
		});

		return data.docs.reverse();
	} catch (error) {
		throw error;
	}
});
