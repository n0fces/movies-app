import { clsx } from 'clsx';
import {
	createElement,
} from 'react';
import styles from './styles.module.scss';
import { BaseButtonComponent, BaseButtonProps } from './types';

export const Button = <C extends BaseButtonComponent = 'button'>({
	component = 'button',
	children,
	className,
	theme,
	maxWidth,
	maxHeight,
	shape,
	size,
	withoutPadding,
	borderRadius,
	reverseDirection,
	...otherProps
}: BaseButtonProps<C>) => {
	className = clsx(styles.button, theme && styles[theme], shape && styles[shape], size && styles[size], borderRadius && styles[`borderRadius_${borderRadius}`], reverseDirection && styles[reverseDirection],{
        [styles.maxWidth]: maxWidth,
        [styles.maxHeight]: maxHeight,
		[styles.withoutPadding]: withoutPadding,
	}, className);
	return createElement(component, { ...otherProps, className }, children);
};