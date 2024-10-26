import { zodiacSigns } from '../../constants/zodiac';
import { ZodiacSign } from '../../types';
import { isValidDate } from '../isValidDate/isValidDate';

/**
 * Функция возвращает текстовое описание знака зодиака по дате рождения
 * @param {string | null} [date] - ожидается строка с датой рождения, по которой можно создать объект Date.
 * @returns Возвращает null, если аргумент undefined, null, пустая строка или строка, по которой не создается корректный объект Date
 * Если по строке можно создать корректный объект Date, то в конце функция вернет соответствующий знак зодиака
 */
export const getZodiac = (date?: string | null): ZodiacSign | null => {
	if (date) {
		if (!isValidDate(date)) return null;
		const birthDate = new Date(date);
		const birthMonth = birthDate.getMonth() + 1;
		const birthDay = birthDate.getDate();

		const sign = zodiacSigns.find(
			(zodiac) =>
				(birthMonth === zodiac.startMonth && birthDay >= zodiac.startDate) ||
				(birthMonth === zodiac.endMonth && birthDay <= zodiac.endDate) ||
				(birthMonth > zodiac.startMonth && birthMonth < zodiac.endMonth),
		);

		return sign?.sign ?? null;
	}

	return null;
};
