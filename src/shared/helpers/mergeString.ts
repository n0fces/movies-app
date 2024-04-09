export const mergeString = (
	firstPart: string,
	slug: number | string,
	secondPart?: string
) => firstPart + `${slug}` + (secondPart ?? '');
