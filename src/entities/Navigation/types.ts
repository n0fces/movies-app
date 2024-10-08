// * если в будущем пригодится, то можно здесь конкретизировать тип для text и code
export interface Item {
	text: string;
	route: string;
	code: 'home' | 'movie' | 'series';
}
