type ColorType = 'default' | 'positive' | 'negative';

export const colorChoice = (
	type: ColorType,
	value?: number,
	i?: number,
	allPrevBtns?: boolean,
) => {
	if (value !== undefined) {
		if (i !== undefined) {
			const isAllPrevBtns = allPrevBtns ? value >= i : value === i;
			switch (type) {
				case 'negative':
					return isAllPrevBtns && value <= 4;
				case 'positive':
					return isAllPrevBtns && value >= 7;
				default:
					return isAllPrevBtns;
			}
		} else {
			switch (type) {
				case 'negative':
					return value <= 4;
				case 'positive':
					return value >= 7;
				default:
					return true;
			}
		}
	} else {
		return false;
	}
};
