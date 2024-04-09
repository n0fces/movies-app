'use client';

import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface DropdownHeaderItemProps {
	isOpen: boolean;
	isMobile: boolean;
	children: React.ReactNode;
}

export const DropdownHeaderItem = ({
	isOpen,
	isMobile,
	children,
}: DropdownHeaderItemProps) => {
	return (
		<div
			className={clsx(styles.dropdown, {
				[styles.dropdownActive]: isOpen,
				[styles.touch]: isMobile,
				[styles.desktop]: !isMobile,
			})}
			>
			{children}
		</div>
	);
};
