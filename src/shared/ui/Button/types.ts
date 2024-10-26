import { PolymorphicComponentProp } from '../../types';

export type ThemeButton =
	| 'primary'
	| 'select'
	| 'gradient'
	| 'textBelow'
	| 'list'
	| 'modal'
	| 'moreButton'
	| 'outlineWhite';

export type SizeButton =
	| 'size_20'
	| 'size_24'
	| 'size_28'
	| 'size_32'
	| 'size_36'
	| 'size_40'
	| 'size_44'
	| 'size_48'
	| 'size_52'
	| 'size_56'
	| 'size_60'
	| 'size_64';

export type ShapeButton = 'rounded' | 'circle';

export type BorderRadiusBtn = '8' | '16';

export type ReverseDirection = 'rowReverse' | 'columnReverse';

export interface BaseButtonProp {
	className?: string;
	theme?: ThemeButton;
	maxWidth?: boolean;
	maxHeight?: boolean;
	shape?: ShapeButton;
	size?: SizeButton;
	withoutPadding?: boolean;
	borderRadius?: BorderRadiusBtn;
	reverseDirection?: ReverseDirection;
}

/**
 * This is the updated component props using PolymorphicComponentPropWithRef
 */
export type ButtonProps<C extends React.ElementType> = PolymorphicComponentProp<
	C,
	BaseButtonProp
>;

/**
 * This is the type used in the type annotation for the component
 */
export type ButtonComponent = <C extends React.ElementType = 'button'>(
	props: ButtonProps<C>,
) => React.ReactElement | null;
