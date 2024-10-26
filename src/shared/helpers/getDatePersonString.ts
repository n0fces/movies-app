import { months } from '../constants/months';
import { getBirthday } from './getBirthday';
import { getZodiac } from './getZodiac/getZodiac';
import { stringWithDelimiter } from './stringWithDelimiter/stringWithDelimiter';

const getAgeString = (age?: number | null) => {
	if (age) {
		const word =
			age % 10 === 1 ? 'год' : [2, 3, 4].includes(age % 10) ? 'года' : 'лет';
		return `${age} ${word}`;
	}

	return null;
};

export const getDatePersonString = (
	date: string | null | undefined,
	age?: number | null,
	withZodiac?: boolean,
) => {
	const birthData = getBirthday(date);
	if (birthData) {
		const { day, month, year } = birthData;
		const zodiac = withZodiac ? getZodiac(date) : null;
		const ageString = getAgeString(age);
		const birth = stringWithDelimiter(' • ', [
			`${day} ${months[month]}, ${year}`,
			zodiac,
			ageString,
		]);
		return birth;
	}

	return null;
};
