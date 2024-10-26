import { months } from '@/shared/constants/months';
import { getBirthday } from '@/shared/helpers/getBirthday';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter/stringWithDelimiter';

import { getAgeString } from './getAgeString';

export const getDatePersonString = (
	date: string | null | undefined,
	age?: number | null,
) => {
	const birthData = getBirthday(date);
	let birth: string | null = null;
	if (birthData) {
		const { day, month, year } = birthData;
		const ageString = age ? `${age} ${getAgeString(age)}` : null;
		birth = stringWithDelimiter(' • ', [
			`${day} ${months[month]}, ${year}`,
			ageString,
		]);
		return birth;
	}

	return birth;
};
