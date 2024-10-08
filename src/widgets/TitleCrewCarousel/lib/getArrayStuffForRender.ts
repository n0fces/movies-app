import { sortPersons } from '@/shared/helpers/sortPersons';
import { PersonInMovie } from '@/shared/types';

import { TitleCrewCarouselType } from '../ui';

export const getArrayStuffForRender = (
	type: TitleCrewCarouselType,
	persons?: PersonInMovie[],
) => {
	if (persons && persons.length > 0) {
		const stuff = sortPersons(persons);
		if (type === 'actors') {
			return stuff.actor.length ? stuff.actor.slice(0, 12) : null;
		} else {
			const stuffMap: Map<number | null | undefined, PersonInMovie> = new Map();

			for (let [key, persons] of Object.entries(stuff)) {
				if (key !== 'actor' && key !== 'voice_actor') {
					for (let person of persons) {
						const personInMap = stuffMap.get(person.id);
						if (personInMap) {
							personInMap.profession += `, ${person.profession}`;
						} else {
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
