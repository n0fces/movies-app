import { months } from '../constants/months';
import { getBirthday } from './getBirthday';
import { getZodiac } from './getZodiac';
import { stringWithDelimiter } from './stringWithDelimiter';

export const getDatePersonString = (
	date: string | null | undefined,
	age?: number | null,
	withZodiac?: boolean,
) => {
	const birthData = getBirthday(date);
	let birth: string | null = null;
	if (birthData) {
		const { day, month, year } = birthData;
		const zodiac = withZodiac ? getZodiac(date) : null;
		let ageString: string | null = null;
		if (age) {
			const word =
				age % 10 === 1 ? 'год' : [2, 3, 4].includes(age % 10) ? 'года' : 'лет';
			ageString = `${age} ${word}`;
		}
		const birth = stringWithDelimiter(' • ', [
			`${day} ${months[month]}, ${year}`,
			zodiac,
			ageString,
		]);
		return birth;
	}

	return birth;
};
