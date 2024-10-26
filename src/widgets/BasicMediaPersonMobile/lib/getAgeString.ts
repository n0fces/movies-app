export const getAgeString = (age: number) => {
	const word =
		age % 10 === 1 ? 'год' : [2, 3, 4].includes(age % 10) ? 'года' : 'лет';
	return `${age} ${word}`;
};
