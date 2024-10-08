'use client';

import { clsx } from 'clsx';
import { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';

import { Button } from '@/shared/ui/Button';

import styles from './styles.module.scss';

interface ReadMoreTextBlockProps {
	className?: string;
	text: string;
	amountOfRows?: number;
}

export const ReadMoreTextBlock = ({
	className,
	text,
	amountOfRows = 3,
}: ReadMoreTextBlockProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [showReadMoreBtn, setShowReadMoreBtn] = useState(false);
	const paragraphRef = useRef<HTMLParagraphElement | null>(null);

	const paragraphStyle: CSSProperties = useMemo(
		() => ({
			display: '-webkit-box',
			WebkitLineClamp: amountOfRows,
			WebkitBoxOrient: 'vertical',
			overflow: 'hidden',
		}),
		[amountOfRows],
	);

	useEffect(() => {
		if (paragraphRef.current) {
			setShowReadMoreBtn(
				paragraphRef.current.scrollHeight !== paragraphRef.current.clientHeight,
			);
		}
	}, []);

	// * обязательно надо будет потом проверить данный компонент на доступность

	return (
		<>
			<p
				ref={paragraphRef}
				style={isOpen ? undefined : paragraphStyle}
				className={clsx(styles.readMoreTextBlock, className)}>
				{text}
			</p>
			{showReadMoreBtn && (
				<Button
					theme="moreButton"
					className={styles.readMoreBtn}
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? 'Свернуть' : 'Полное описание'}
				</Button>
			)}
		</>
	);
};
