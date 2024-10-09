import { cache } from 'react';

import { api } from '@/shared/api';
import { CardItemReq } from '@/shared/types';

export const getInCinema = cache(async () => {
	const { data } = await api.get<CardItemReq>('v1.4/movie', {
		params: {
			ticketsOnSale: true,
			selectFields: [
				'id',
				'poster',
				'name',
				'alternativeName',
				'enName',
				'year',
				'rating',
				'votes',
				'genres',
				'watchability',
				'ticketsOnSale',
				'persons',
				'isSeries',
			],
			sortField: ['year', 'votes.kp'],
			sortType: [-1, -1],
			limit: 20,
		},
	});

	return data.docs.sort((a, b) => {
		const x = Number(a?.votes?.kp ?? 0);
		const y = Number(b?.votes?.kp ?? 0);
		return x - y;
	});
});
