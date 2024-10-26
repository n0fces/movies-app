type ValidNumber = number & { __isValid__: true };

const isValidNumber = (n: number | null | undefined): n is ValidNumber => {
	return typeof n === 'number' && n >= 0;
};

/**
 * Функция, которая конвертирует минуты в кортеж формата [hours, minutes]
 * @param {number | null} [min] - количество минут (длительность фильма или серии сериала)
 * @returns кортеж формата [hours, minutes]
 * Если min не типа number, то вернется null.
 * Если min будет отрицательным, то вернется null.
 * Если min типа number >= 0, то кортеж формата [hours, minutes].
 * Если min < 60, то hours = 0.
 * minutes - остаток от деления min на 60
 */
export const convertMinutes = (min?: number | null) => {
	if (isValidNumber(min)) {
		const hours = Math.floor(min / 60);
		const minutes = min % 60;
		return [hours, minutes];
	}
	return null;
};
