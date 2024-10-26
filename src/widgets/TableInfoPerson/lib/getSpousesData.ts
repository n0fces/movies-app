import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter/stringWithDelimiter';
import { Spouses } from '@/shared/types';

export const getSpousesData = (spouses: Spouses[] | undefined) => {
	const filteredSpouses = spouses?.filter((spouse) => spouse.name);
	return filteredSpouses?.length
		? filteredSpouses.map(({ name, divorcedReason }) =>
				stringWithDelimiter(' ', [name, divorcedReason]),
			)
		: null;
};
