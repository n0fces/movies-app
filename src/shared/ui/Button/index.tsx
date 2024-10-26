import { clsx } from 'clsx';

import styles from './styles.module.scss';
import { ButtonComponent, ButtonProps } from './types';

export const Button: ButtonComponent = <
	C extends React.ElementType = 'button',
>({
	as,
	children,
	className,
	theme,
	shape,
	size,
	borderRadius,
	reverseDirection,
	maxWidth,
	maxHeight,
	withoutPadding,
	...rest
}: ButtonProps<C>) => {
	const Component = as ?? 'button';

	const computedStyles = clsx(
		styles.button,
		theme && styles[theme],
		shape && styles[shape],
		size && styles[size],
		borderRadius && styles[`borderRadius_${borderRadius}`],
		reverseDirection && styles[reverseDirection],
		{
			[styles.maxWidth]: maxWidth,
			[styles.maxHeight]: maxHeight,
			[styles.withoutPadding]: withoutPadding,
		},
		className,
	);

	return (
		<Component {...rest} className={computedStyles}>
			{children}
		</Component>
	);
};
