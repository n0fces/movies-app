import { colorChoice } from './colorChoice';

export const setColorClasses = (
	styles: {
		readonly [key: string]: string;
	},
	value?: number,
	i?: number,
	allPrevBtns?: boolean
) => ({
	[styles.default]: colorChoice('default', value, i, allPrevBtns),
	[styles.positive]: colorChoice('positive', value, i, allPrevBtns),
	[styles.negative]: colorChoice('negative', value, i, allPrevBtns),
});
