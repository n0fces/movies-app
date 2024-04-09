import { Watchability } from '@/shared/types';

export const canWatchInKP = (watchability: Watchability | null | undefined) => {
	if (watchability?.items?.length) {
		for (let service of watchability?.items) {
			if (service.name === 'Kinopoisk HD') return true;
		}
	}
	return false;
};
