import { ZodiacSignDateRange } from '../types';

export const zodiacSigns: ZodiacSignDateRange[] = [
	{ sign: 'Овен', startMonth: 3, startDate: 21, endMonth: 4, endDate: 19 },
	{ sign: 'Телец', startMonth: 4, startDate: 20, endMonth: 5, endDate: 20 },
	{
		sign: 'Близнецы',
		startMonth: 5,
		startDate: 21,
		endMonth: 6,
		endDate: 20,
	},
	{ sign: 'Рак', startMonth: 6, startDate: 21, endMonth: 7, endDate: 22 },
	{ sign: 'Лев', startMonth: 7, startDate: 23, endMonth: 8, endDate: 22 },
	{ sign: 'Дева', startMonth: 8, startDate: 23, endMonth: 9, endDate: 22 },
	{ sign: 'Весы', startMonth: 9, startDate: 23, endMonth: 10, endDate: 22 },
	{
		sign: 'Скорпион',
		startMonth: 10,
		startDate: 23,
		endMonth: 11,
		endDate: 21,
	},
	{
		sign: 'Стрелец',
		startMonth: 11,
		startDate: 22,
		endMonth: 12,
		endDate: 21,
	},
	{
		sign: 'Козерог',
		startMonth: 12,
		startDate: 22,
		endMonth: 1,
		endDate: 19,
	},
	{ sign: 'Водолей', startMonth: 1, startDate: 20, endMonth: 2, endDate: 18 },
	{ sign: 'Рыбы', startMonth: 2, startDate: 19, endMonth: 3, endDate: 20 },
];
