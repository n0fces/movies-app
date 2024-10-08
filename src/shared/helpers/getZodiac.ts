import { zodiacSigns } from '../constants/zodiac';
import { ZodiacSign } from '../types';

export const getZodiac = (
	date: string | null | undefined,
): ZodiacSign | undefined => {
	if (date) {
		const birthDate = new Date(date);
		const birthMonth = birthDate.getMonth() + 1;
		const birthDay = birthDate.getDate();

		// если дата рождения есть, то точно сможем определить знак зодиака, поэтому в конце !
		const sign = zodiacSigns.find(
			(zodiac) =>
				(birthMonth === zodiac.startMonth && birthDay >= zodiac.startDate) ||
				(birthMonth === zodiac.endMonth && birthDay <= zodiac.endDate),
		)!;

		return sign.sign;
	}
};
