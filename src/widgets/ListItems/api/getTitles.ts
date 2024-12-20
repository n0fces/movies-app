import { cache } from 'react';

import { api } from '@/shared/api';
import { ListItemsReq } from '@/shared/types';

import { makeSortParams } from '../lib/makeSortParams';

export const getTitles = cache(
	async (
		lists: string,
		searchParams: Record<string, string>,
		limit: number,
	) => {
		const [sortField, sortType] = makeSortParams(lists, searchParams);

		const params: Record<string, string | string[] | number> = {
			limit,
			selectFields: [
				'id',
				'poster',
				'name',
				'enName',
				'alternativeName',
				'year',
				'releaseYears',
				'movieLength',
				'seriesLength',
				'countries',
				'genres',
				'persons',
				'rating',
				'votes',
				'top250',
				'watchability',
				'videos',
			],
			lists,
			...searchParams,
		};

		if (lists === 'top250' || lists === 'series-top250') {
			params.notNullFields = ['top250'];
		}

		if (sortField.length > 0) {
			params.sortField = sortField;
		}

		if (sortType.length > 0) {
			params.sortType = sortType;
		}

		const { data } = await api.get<ListItemsReq>('v1.4/movie', {
			params,
		});

		return data;
	},
);
