import { colorChoice } from './colorChoice';

// value - текущее активное значение рейтинга
// если навешиваем классы через css (не нужно использование useState),
// то при использовании данной функции ставим вместо value i

export const setColorClasses = (
	styles: Readonly<Record<string, string>>,
	value?: number,
	i?: number,
	allPrevBtns?: boolean,
) => ({
	[styles.default]: colorChoice('default', value, i, allPrevBtns),
	[styles.positive]: colorChoice('positive', value, i, allPrevBtns),
	[styles.negative]: colorChoice('negative', value, i, allPrevBtns),
});
