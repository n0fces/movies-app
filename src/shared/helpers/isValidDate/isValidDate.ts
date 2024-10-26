/**
 * Функция проверки строки даты на корректность
 * @param {string | null} [dateString] - аргумент должен быть непустой строкой для проверки.
 * @returns Если аргумент null, undefined или пустая строка, то false.
 * Если непустая строка является невалидной датой, то false.
 * Если непустая строка является валидной датой, то true
 */
export function isValidDate(dateString?: string | null) {
	if (!dateString) return false;
	const date = new Date(dateString);
	return !isNaN(date.getTime());
}
