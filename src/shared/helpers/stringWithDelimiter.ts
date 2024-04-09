export const stringWithDelimiter = (
	delimiter: string,
	arr: Array<string | number | null | undefined> | null | undefined
) => {
	if (Array.isArray(arr)) {
		return arr.filter(Boolean).join(delimiter);
	}
};
