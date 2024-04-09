import { PersonInMovie } from '@/shared/types';
import { TitleCrewCarouselType } from '../ui';
import { sortPersons } from '@/shared/helpers/sortPersons';

export const getArrayStuffForRender = (
	type: TitleCrewCarouselType,
	persons?: PersonInMovie[]
) => {
	if (persons) {
		const stuff = sortPersons(persons);
		if (type === 'actors') {
			return stuff.actor.slice(0, 12);
		} else {
			const stuffMap: Map<number | null | undefined, PersonInMovie> =
				new Map();

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

			return Array.from(stuffMap.values()).slice(0, 6);
		}
	}
};
