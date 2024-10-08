'use client';

import { clsx } from 'clsx';
import { useEffect, useRef } from 'react';

import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';

import {
	ContextValueProvider,
	SetRatingBaseProvider,
	useIsOpen,
	useSettersBase,
} from '../../context';
import { Indicator } from './Indicator';
import { RatingButton } from './RatingButton';
import { Separator } from './Separator';
import { Voiting } from './Voiting';
import styles from './styles.module.scss';

interface SetRatingProps {
	className?: string;
}

export const RatingBarObj = ({ className }: SetRatingProps) => {
	// * по умолчанию потом будет браться значение с бд. Если оно есть, то сразу будет установлено. При установленном значении мы сможем сначала только убрать текущий рейтинг, а потом снова выбрать
	const { setIsOpen } = useSettersBase();
	const isOpen = useIsOpen();
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (isOpen) {
			ref.current?.focus();
		}
	}, [isOpen]);

	return (
		<DropdownWrapper
			setIsOpen={setIsOpen}
			className={clsx(styles.choiceContainer, className)}>
			<RatingButton />
			{isOpen && (
				<div
					ref={ref}
					className={styles.choiceBar}
					tabIndex={0}
					aria-label="Панель выставления рейтинга">
					<Voiting />
					<Separator />
					<Indicator />
				</div>
			)}
		</DropdownWrapper>
	);
};

export const RatingBar = ({ className }: SetRatingProps) => (
	<SetRatingBaseProvider>
		<ContextValueProvider>
			<RatingBarObj className={className} />
		</ContextValueProvider>
	</SetRatingBaseProvider>
);
