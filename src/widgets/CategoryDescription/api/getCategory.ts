import { cache } from 'react';

import { api } from '@/shared/api';
import { List } from '@/shared/types';

export const getCategory = cache(async (slug: string) => {
	const { data } = await api.get<List>(`v1.4/list/${slug}`);
	return data;
});
