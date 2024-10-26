import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter/stringWithDelimiter';
import { Profession } from '@/shared/types';

export const getProfessions = (profession: Profession[] | undefined) => {
	if (profession) {
		const profArr = profession
			.filter((prof) => prof.value)
			.map((prof) => prof.value);
		return stringWithDelimiter(', ', profArr) ?? null;
	} else {
		return null;
	}
};
