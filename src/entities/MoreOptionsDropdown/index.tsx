'use client'

import styles from './styles.module.scss';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { useState } from 'react';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { BaseButtonProps } from '@/shared/ui/Button/types';

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
		<DropdownWrapper
			setIsOpen={setIsOpen}
			className={className}>
			<Button
				onClick={() => setIsOpen(!isOpen)}
				className={className}
				{...props}>
				<Icon
					name='more-options'
					className={styles.buttonIcon}
				/>
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
