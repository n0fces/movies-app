import { clsx } from 'clsx';
import {
	DetailedHTMLProps,
	Dispatch,
	HTMLAttributes,
	SetStateAction,
	forwardRef,
} from 'react';

import styles from './styles.module.scss';

interface DropdownWrapperProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const DropdownWrapper = forwardRef<HTMLDivElement, DropdownWrapperProps>(
	function DropdownWrapper(props, ref) {
		const { children, className, setIsOpen, ...otherProps } = props;

		return (
			<div
				ref={ref}
				className={clsx(styles.dropdownWrapper, className)}
				tabIndex={-1}
				onBlur={(e) => {
					if (!e.currentTarget.contains(e.relatedTarget)) {
						setIsOpen(false);
					}
				}}
				{...otherProps}>
				{children}
			</div>
		);
	},
);
