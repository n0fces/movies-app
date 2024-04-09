import { api } from '@/shared/api';
import { cache } from 'react';
import { makeSortParams } from '../lib/makeSortParams';
import { ListItemsReq } from '@/shared/types';

export const getTitles = cache(
	async (
		lists: string,
		searchParams: { [key: string]: string },
		limit: number
	) => {
		try {
			const [sortField, sortType] = makeSortParams(lists, searchParams);

			const params: { [key: string]: string | string[] | number } = {
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
				params['notNullFields'] = ['top250'];
			}

			if (sortField.length > 0) {
				params['sortField'] = sortField;
			}

			if (sortType.length > 0) {
				params['sortType'] = sortType;
			}

			const { data } = await api.get<ListItemsReq>('v1.4/movie', {
				params,
				timeout: 60000,
			});

			return data;
		} catch (error) {
			throw error;
		}
	}
);
