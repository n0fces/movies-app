'use client';

import { clsx } from 'clsx';
import { useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { ShapeButton, SizeButton, ThemeButton } from '@/shared/ui/Button/types';

import styles from './styles.module.scss';

interface ReadMoreComponentProps {
	className?: string;
	isInitialOpen?: boolean;
	textOnClose?: string;
	textOnOpen?: string;
	theme?: ThemeButton;
	size?: SizeButton;
	shape?: ShapeButton;
	children: React.ReactNode;
}

export const ReadMoreComponent = ({
	className,
	isInitialOpen = false,
	textOnClose = 'Все детали',
	textOnOpen = 'Скрыть детали',
	theme = 'primary',
	size = 'size_32',
	shape = 'rounded',
	children,
}: ReadMoreComponentProps) => {
	const [isOpen, setIsOpen] = useState(isInitialOpen);
	return (
		<>
			<div
				className={clsx(styles.readMoreComp, {
					[styles.isOpen]: isOpen,
				})}>
				{isOpen && children}
			</div>
			<div className={styles.readMoreCnt}>
				<Button
					theme={theme}
					size={size}
					shape={shape}
					className={className}
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? textOnOpen : textOnClose}
				</Button>
			</div>
		</>
	);
};
