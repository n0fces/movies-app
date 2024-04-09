type Id = number | null | undefined | string;

export const getPath = {
	movie: (id: Id) => `/movies/${id}`,
	series: (id: Id) => `/series/${id}`,
	person: (id: Id) => `/person/${id}`,
	afisha: (id: Id) => `https://www.kinopoisk.ru/afisha/new/city/${id}/`,
	top250: (isSeries: boolean) =>
		`/lists/titles/${isSeries ? 'series-top250' : 'top250'}`,
	popularSeriesFilter: (filter: string) => `/lists/titles/popular-series?${filter}`,
	popularMoviesFilter: (filter: string) => `/lists/titles/popular-films?${filter}`,
};
