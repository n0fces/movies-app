export const stringWithDelimiter = <T = 'string'>(
	delimiter: string,
	arr: Array<T | null | undefined> | null | undefined
) => {
	if (Array.isArray(arr) && arr.length) {
		return arr.filter(Boolean).join(delimiter);
	}
};
