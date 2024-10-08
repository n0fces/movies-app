import {
	Attributes,
	ComponentPropsWithRef,
	ComponentType,
} from 'react';

export type ThemeButton =
	| 'primary'
	| 'select'
	| 'gradient'
	| 'textBelow'
	| 'list'
	| 'modal'
	| 'moreButton'
	| 'outlineWhite';

export type SizeButton = 'size_20' | 'size_24' | 'size_28' | 'size_32' | 'size_36' | 'size_40' | 'size_44' | 'size_48' | 'size_52' | 'size_56' | 'size_60' | 'size_64';

export type ShapeButton = 'rounded' | 'circle';

export type BorderRadiusBtn = '8' | '16';

export type ReverseDirection = 'rowReverse' | 'columnReverse';

export type BaseButtonComponent = keyof JSX.IntrinsicElements | ComponentType<any>;

type BaseProps<C extends BaseButtonComponent = 'button'> = {
	component?: C;
	theme?: ThemeButton;
	maxWidth?: boolean;
	maxHeight?: boolean;
	shape?: ShapeButton;
	size?: SizeButton;
	withoutPadding?: boolean;
	borderRadius?: BorderRadiusBtn
	reverseDirection?: ReverseDirection
} & Attributes;

export type BaseButtonProps<C extends BaseButtonComponent = 'button'> =
	C extends keyof JSX.IntrinsicElements
		? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
		: C extends ComponentType<infer P>
		? P extends ComponentPropsWithRef<any>
			? Omit<P, keyof BaseProps<C>> & BaseProps<C>
			: never
		: never;