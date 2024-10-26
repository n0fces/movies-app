import { LinkProps } from 'next/link';

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

interface BaseProps {
	theme?: ThemeButton;
	maxWidth?: boolean;
	maxHeight?: boolean;
	shape?: ShapeButton;
	size?: SizeButton;
	withoutPadding?: boolean;
	borderRadius?: BorderRadiusBtn;
	reverseDirection?: ReverseDirection;
	children: React.ReactNode;
	className?: string;
}

export type ButtonAsButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	as?: 'button';
} & BaseProps;

type ButtonAsLink = React.AnchorHTMLAttributes<HTMLAnchorElement> &
	LinkProps & {
		as: 'link';
	} & BaseProps;

export type ButtonProps = ButtonAsButton | ButtonAsLink;
