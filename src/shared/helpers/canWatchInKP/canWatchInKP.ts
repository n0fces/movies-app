import { Watchability } from '@/shared/types';

/**
 * Функция проверяет, есть ли в массиве `Watchability` ресурс `Kinopoisk HD`
 * @param {Watchability | null | undefined} watchability - объект, в котором есть ключ items, содержащий массив с информацией
 * о ресурсах, на которых доступен данный фильм или сериал
 * @returns Возвращает true, если в списке есть `Kinopoisk HD`.
 * Возвращает false, если в списке нет `Kinopoisk HD`.
 */
export const canWatchInKP = (watchability: Watchability | null | undefined) => {
	if (watchability?.items?.length) {
		for (const service of watchability.items) {
			if (service.name === 'Kinopoisk HD') return true;
		}
	}
	return false;
};
