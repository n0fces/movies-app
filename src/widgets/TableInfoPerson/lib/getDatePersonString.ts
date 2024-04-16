import { months } from '@/shared/constants/months';
import { getBirthday } from './getBirthday';

export const getDatePersonString = (
	date: string | null | undefined,
	age?: number | null
) => {
	const birthData = getBirthday(date);
	let birth: string | null = null;
	if (birthData) {
		const { day, month, year } = birthData;
		let ageString;
		if (age) {
			const word =
				age % 10 === 1
					? 'год'
					: [2, 3, 4].includes(age % 10)
					? 'года'
					: 'лет';
			ageString = ` • ${age} ${word}`;
		}
		birth = `${day} ${months[month]}, ${year}${ageString}`;
	}

	return birth;
};
