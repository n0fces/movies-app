export interface OptionProps {
	value: string;
	label: string;
}

export interface SelectProps {
	options?: OptionProps[];
	value?: string;
	name?: string;
	description?: string;
	position?: 'left' | 'right';
	className?: string;
	action?: (value: string, label: string) => void;
}