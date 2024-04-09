import { ThemeButton } from '@/shared/types';
import { clsx } from 'clsx';
import {
	Attributes,
	ComponentPropsWithRef,
	ComponentType,
	createElement,
} from 'react';
import styles from './styles.module.scss';

type BaseButtonComponent = keyof JSX.IntrinsicElements | ComponentType<any>;

type BaseProps<C extends BaseButtonComponent = 'button'> = {
	component?: C;
	theme?: ThemeButton;
} & Attributes;

export type BaseButtonProps<C extends BaseButtonComponent = 'button'> =
	C extends keyof JSX.IntrinsicElements
		? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
		: C extends ComponentType<infer P>
		? P extends ComponentPropsWithRef<any>
			? Omit<P, keyof BaseProps<C>> & BaseProps<C>
			: never
		: never;

export const Button = <C extends BaseButtonComponent = 'button'>({
	component = 'button',
	children,
	className,
	theme = 'default',
	...otherProps
}: BaseButtonProps<C>) => {
	className = clsx(styles.button, className, styles[theme]);
	return createElement(component, { ...otherProps, className }, children);
};
