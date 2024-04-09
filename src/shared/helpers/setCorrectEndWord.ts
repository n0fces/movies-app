export const setCorrectEndWord = (word: string, num: number) => {
	let ending: string;
	if (num === 1) {
		ending = '';
	} else if (num === 2 || num === 3 || num === 4) {
		ending = 'а';
	} else {
		ending = 'ов';
	}
	return word + ending;
};
