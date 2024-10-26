import { EnProfession, PersonInMovie } from '../../types';
import { sortPersons } from './sortPersons';

const defaultResult: Record<EnProfession, PersonInMovie[]> = {
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

const persons: PersonInMovie[] = [
	{
		id: 797,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_797.jpg',
		name: 'Мэттью Макконахи',
		enName: 'Matthew McConaughey',
		description: 'Cooper',
		profession: 'актеры',
		enProfession: 'actor',
	},
	{
		id: 38703,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_38703.jpg',
		name: 'Энн Хэтэуэй',
		enName: 'Anne Hathaway',
		description: 'Brand',
		profession: 'актеры',
		enProfession: 'actor',
	},
	{
		id: 50590,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_50590.jpg',
		name: 'Ханс Циммер',
		enName: 'Hans Zimmer',
		description: null,
		profession: 'композиторы',
		enProfession: 'composer',
	},
	{
		id: 1642584,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1642584.jpg',
		name: 'Нэйтан Краули',
		enName: 'Nathan Crowley',
		description: null,
		profession: 'художники',
		enProfession: 'designer',
	},
	{
		id: 1987056,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987056.jpg',
		name: 'Кенделл Эллиотт',
		enName: 'Kendelle Elliott',
		description: null,
		profession: 'художники',
		enProfession: 'designer',
	},
	{
		id: 2354627,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2354627.jpg',
		name: 'Ли Смит',
		enName: 'Lee Smith',
		description: null,
		profession: 'монтажеры',
		enProfession: 'editor',
	},
	{
		id: 758887,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_758887.jpg',
		name: 'Хойте Ван Хойтема',
		enName: 'Hoyte Van Hoytema',
		description: null,
		profession: 'операторы',
		enProfession: 'operator',
	},
	{
		id: 41477,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_41477.jpg',
		name: 'Кристофер Нолан',
		enName: 'Christopher Nolan',
		description: null,
		profession: 'продюсеры',
		enProfession: 'producer',
	},
	{
		id: 1078858,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1078858.jpg',
		name: 'Василий Дахненко',
		enName: null,
		description: null,
		profession: 'актеры дубляжа',
		enProfession: 'voice_actor',
	},
	{
		id: 1663494,
		photo:
			'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1663494.jpg',
		name: 'Марьяна Спивак',
		enName: null,
		description: null,
		profession: 'актеры дубляжа',
		enProfession: 'voice_actor',
	},
];

const result: Record<EnProfession, PersonInMovie[]> = {
	director: [],
	writer: [],
	producer: [
		{
			id: 41477,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_41477.jpg',
			name: 'Кристофер Нолан',
			enName: 'Christopher Nolan',
			description: null,
			profession: 'продюсеры',
			enProfession: 'producer',
		},
	],
	operator: [
		{
			id: 758887,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_758887.jpg',
			name: 'Хойте Ван Хойтема',
			enName: 'Hoyte Van Hoytema',
			description: null,
			profession: 'операторы',
			enProfession: 'operator',
		},
	],
	composer: [
		{
			id: 50590,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_50590.jpg',
			name: 'Ханс Циммер',
			enName: 'Hans Zimmer',
			description: null,
			profession: 'композиторы',
			enProfession: 'composer',
		},
	],
	designer: [
		{
			id: 1642584,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1642584.jpg',
			name: 'Нэйтан Краули',
			enName: 'Nathan Crowley',
			description: null,
			profession: 'художники',
			enProfession: 'designer',
		},
		{
			id: 1987056,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1987056.jpg',
			name: 'Кенделл Эллиотт',
			enName: 'Kendelle Elliott',
			description: null,
			profession: 'художники',
			enProfession: 'designer',
		},
	],
	editor: [
		{
			id: 2354627,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2354627.jpg',
			name: 'Ли Смит',
			enName: 'Lee Smith',
			description: null,
			profession: 'монтажеры',
			enProfession: 'editor',
		},
	],
	actor: [
		{
			id: 797,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_797.jpg',
			name: 'Мэттью Макконахи',
			enName: 'Matthew McConaughey',
			description: 'Cooper',
			profession: 'актеры',
			enProfession: 'actor',
		},
		{
			id: 38703,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_38703.jpg',
			name: 'Энн Хэтэуэй',
			enName: 'Anne Hathaway',
			description: 'Brand',
			profession: 'актеры',
			enProfession: 'actor',
		},
	],
	voice_actor: [
		{
			id: 1078858,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1078858.jpg',
			name: 'Василий Дахненко',
			enName: null,
			description: null,
			profession: 'актеры дубляжа',
			enProfession: 'voice_actor',
		},
		{
			id: 1663494,
			photo:
				'https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1663494.jpg',
			name: 'Марьяна Спивак',
			enName: null,
			description: null,
			profession: 'актеры дубляжа',
			enProfession: 'voice_actor',
		},
	],
};

const newPersons = [
	...persons,
	{
		id: 1,
		photo: '',
		name: 'Бенедикт Камбэкбэч',
		enName: 'Benedict Comebackbatch',
		description: 'MVP',
		profession: 'лучший',
		enProfession: 'best',
	},
];

describe('sortPersons', () => {
	test('should return null for undefined', () => {
		expect(sortPersons(undefined)).toEqual(defaultResult);
	});

	test('should return a sorted result', () => {
		expect(sortPersons(persons)).toEqual(result);
	});

	test('should omit an unknown profession', () => {
		expect(sortPersons(newPersons)).toEqual(result);
	});
});
