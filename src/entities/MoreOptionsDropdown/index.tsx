'use client';

import { useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { BaseButtonProps } from '@/shared/ui/Button/types';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { Icon } from '@/shared/ui/Icon';

import styles from './styles.module.scss';

interface MoreOptionsDropdownProps extends BaseButtonProps<'button'> {
	className?: string;
	children: React.ReactNode;
	position?: 'left' | 'right';
}

export const MoreOptionsDropdown = ({
	className,
	children,
	position = 'left',
	...props
}: MoreOptionsDropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownWrapper setIsOpen={setIsOpen} className={className}>
			<Button
				onClick={() => setIsOpen(!isOpen)}
				className={className}
				{...props}>
				<Icon name="more-options" className={styles.buttonIcon} />
			</Button>
			{isOpen && (
				<DropdownBackdrop
					className={styles.dropdownOptions}
					position={position}>
					{children}
				</DropdownBackdrop>
			)}
		</DropdownWrapper>
	);
};
