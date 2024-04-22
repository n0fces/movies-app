'use client';

import { ThemeButton } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { useState } from 'react';
import styles from './styles.module.scss';
import { clsx } from 'clsx';

interface ReadMoreComponentProps {
	className?: string;
	isInitialOpen?: boolean;
	textOnClose?: string;
	textOnOpen?: string;
	theme?: ThemeButton;
	children: React.ReactNode;
}

export const ReadMoreComponent = ({
	className,
	isInitialOpen = false,
	textOnClose = 'Все детали',
	textOnOpen = 'Скрыть детали',
	theme = 'useFeature',
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
					className={className}
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? textOnOpen : textOnClose}
				</Button>
			</div>
		</>
	);
};
