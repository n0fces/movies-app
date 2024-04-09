import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Portal } from '../Portal';
import { HTMLAttributes } from 'react';

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: React.ReactNode;
}

export const Popover = ({
	className,
	children,
	...otherProps
}: PopoverProps) => {
	return (
		<Portal element={document.getElementById('popover-root')!}>
			<div
				className={clsx(styles.popover, className)}
				{...otherProps}>
				{children}
			</div>
		</Portal>
	);
};
