import { EnProfession, PersonInMovie } from '@/shared/types';

/**
 * Функция по сортировке профессионального состава сотрудников по профессиям
 * @param {PersonInMovie[] | undefined} persons - принимает массив профессионального состава по конкретному фильму или сериалу
 * @returns Возвращает объект типа Record<EnProfession, PersonInMovie[]>.
 * Если аргумент undefined, то в этом объекте каждый массив будет пустой
 */
export const sortPersons = (persons: PersonInMovie[] | undefined) => {
	const result: Record<EnProfession, PersonInMovie[]> = {
		director: [],
		writer: [],
		producer: [],
		operator: [],
		composer: [],
		designer: [],
		editor: [],
		actor: [],
		voice_actor: [],
	};

	if (persons === undefined) return result;

	for (const person of persons) {
		switch (person.enProfession) {
			case 'director':
				result.director.push(person);
				break;
			case 'writer':
				result.writer.push(person);
				break;
			case 'producer':
				result.producer.push(person);
				break;
			case 'operator':
				result.operator.push(person);
				break;
			case 'composer':
				result.composer.push(person);
				break;
			case 'designer':
				result.designer.push(person);
				break;
			case 'editor':
				result.editor.push(person);
				break;
			case 'actor':
				result.actor.push(person);
				break;
			case 'voice_actor':
				result.voice_actor.push(person);
				break;
		}
	}

	return result;
};
