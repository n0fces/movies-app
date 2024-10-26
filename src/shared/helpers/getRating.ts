import { Rating } from '@/shared/types';

type getRatingReturned = [string, keyof Rating] | null;

export const getRating = (
	rating: Rating | null | undefined,
): getRatingReturned => {
	if (rating) {
		const availableSources: (keyof Rating)[] = ['kp', 'imdb', 'tmdb', 'await'];
		for (const source of availableSources) {
			const x = rating[source];
			if (x) {
				const returnVal = source === 'await' ? x.toFixed(0) : x.toFixed(1);
				return [returnVal, source];
			}
		}
	}

	return null;
};
