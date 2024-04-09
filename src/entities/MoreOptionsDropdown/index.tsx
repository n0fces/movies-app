'use client'

import styles from './styles.module.scss';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { useState } from 'react';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { ThemeButton } from '@/shared/types';

interface MoreOptionsDropdownProps {
	className?: string;
	children: React.ReactNode;
	position?: 'left' | 'right';
	
	theme?: ThemeButton
}

export const MoreOptionsDropdown = ({
	className,
	children,
	position = 'left',
	theme = 'default'
}: MoreOptionsDropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownWrapper
			setIsOpen={setIsOpen}
			className={className}>
			<Button
				onClick={() => setIsOpen(!isOpen)}
				theme={theme}
				className={className}>
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
