import { cache } from 'react';

import { api } from '@/shared/api';
import { ListReq } from '@/shared/types';

export const getCategories = cache(async (category: string) => {
	const { data } = await api.get<ListReq>('v1.4/list', {
		params: {
			page: 1,
			limit: 100,
			category,
		},
	});

	return data.docs.reverse();
});
