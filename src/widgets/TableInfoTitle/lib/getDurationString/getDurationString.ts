import { convertMinutes } from '@/shared/helpers/convertMinutes/convertMinutes';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter/stringWithDelimiter';

/**
 * Функция, которая предоставляет нужный формат строки для отображения длительности фильма или сериала
 * @param {number | null | undefined} min - длительность в минутах фильма или серии сериала
 * @returns ответ в формате 'X ч Y мин'.
 * Если аргумент является невалидным значением (null, undefined, number < 0), то вернется null.
 * Если какое-то из этих значений равно 0, то данная часть не будет отображаться
 */
export const getDurationString = (min: number | null | undefined) => {
	const time = convertMinutes(min);
	if (time) {
		const [hours, minutes] = time;
		const strHours = hours ? `${hours} ч` : null;
		const strMinutes = minutes ? `${minutes} мин` : null;

		return stringWithDelimiter(' ', [strHours, strMinutes]);
	}

	return null;
};
