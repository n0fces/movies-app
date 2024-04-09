import { OptionProps } from '@/shared/ui/Select/types';
import { ReadonlyURLSearchParams } from 'next/navigation';

export const additionalText = (
	typeParam: string,
	options: OptionProps[],
	addText: string,
	searchParams: ReadonlyURLSearchParams
) => {
	const searchParam = searchParams.get(typeParam);
	return (
		options?.find((option) => searchParam === option.value)?.label ??
		addText
	);
};
