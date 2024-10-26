import { sortPersons } from '@/shared/helpers/sortPersons/sortPersons';
import { PersonInMovie } from '@/shared/types';

import { TitleCrewCarouselType } from '../ui';

/**
 * Вспомогательная функция для составления списка профессионального состава для отображения
 * в зависимости от переданного типа
 * @param {TitleCrewCarouselType} type - тип списка профессионального состава, который нужен для отображения.
 * Если TitleCrewCarouselType === 'actors', то будет список из актеров, а иначе будет список
 * остального профессионального состава.
 * @param {PersonInMovie[]} [persons] - весь профессиональный состав фильма или сериала (исходные данные)
 * @returns список профессионального состава в зависимости от TitleCrewCarouselType
 */
export const getArrayStuffForRender = (
	type: TitleCrewCarouselType,
	persons?: PersonInMovie[],
) => {
	if (persons && persons.length > 0) {
		const stuff = sortPersons(persons);
		if (type === 'actors') {
			return stuff.actor.length ? stuff.actor.slice(0, 12) : null;
		} else {
			const stuffMap = new Map<number | null | undefined, PersonInMovie>();

			for (const [key, persons] of Object.entries(stuff)) {
				if (key !== 'actor' && key !== 'voice_actor') {
					for (const person of persons) {
						const personInMap = stuffMap.get(person.id);
						// если человек уже есть в stuffMap, то надо добавить ему профессию
						if (personInMap?.profession) {
							personInMap.profession += `, ${person.profession}`;
						} else {
							// если человека еще нет в stuffMap, то необходимо его добавить
							stuffMap.set(person.id, person);
						}
					}
				}
			}

			const arr = Array.from(stuffMap.values());
			return arr.length ? arr.slice(0, 6) : null;
		}
	}
};
