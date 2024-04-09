import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import styles from './styles.module.scss';
import { clsx } from 'clsx';

interface DropdownBackdropProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	position?: 'left' | 'right';
}

export const DropdownBackdrop = forwardRef<
	HTMLDivElement,
	DropdownBackdropProps
>(function DropdownBackdrop(props, ref) {
	const { children, className, position = 'left', ...otherProps } = props;

	return (
		<div
			ref={ref}
			className={clsx(styles.dropdownBackdrop, className, {
				[styles.dropdownBackdropLeft]: position === 'left',
				[styles.dropdownBackdropRight]: position === 'right',
			})}
			{...otherProps}>
			{children}
		</div>
	);
});
