import { EnProfession, PersonInMovie } from '@/shared/types';

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

	for (let person of persons) {
		if (person) {
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
	}

	return result;
};
