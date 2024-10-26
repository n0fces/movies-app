import { clsx } from 'clsx';
import Link from 'next/link';

import styles from './styles.module.scss';
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
	const {
		className,
		theme,
		maxWidth,
		maxHeight,
		shape,
		size,
		withoutPadding,
		borderRadius,
		reverseDirection,
		...rest
	} = props;

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

	// if (rest.as === 'link') {
	// 	return <Link {...rest} className={computedStyles} />;
	// } else {
	// 	return <button {...rest} className={computedStyles} />;
	// }

	return rest.as === 'link' ? (
		<Link {...rest} className={computedStyles} />
	) : (
		<button {...rest} className={computedStyles} />
	);
};
