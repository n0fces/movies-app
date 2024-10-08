'use client';

import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

import { ListItemProps } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import {
	ReverseDirection,
	ShapeButton,
	SizeButton,
	ThemeButton,
} from '@/shared/ui/Button/types';
import { ModalLoader } from '@/shared/ui/ModalLoader';

interface ModalTrailerProps extends ListItemProps {
	className?: string;
	isSidebar?: boolean;
	theme?: ThemeButton;
	shape?: ShapeButton;
	size?: SizeButton;
	withoutPadding?: boolean;
	reverseDirection?: ReverseDirection;
	btnContent?: React.ReactNode;
}

const ModalTrailerRoot = dynamic(() => import('./ModalTrailerRoot'), {
	loading: () => <ModalLoader />,
	ssr: false,
});

export const ModalTrailer = ({
	className,
	theme,
	shape,
	size,
	btnContent,
	withoutPadding,
	reverseDirection,
	...otherProps
}: ModalTrailerProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const showModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);
	// после клика на другой трейлер в общей области просмотра должен появиться именно этот трейлер
	return (
		<>
			<Button
				onClick={showModal}
				className={className}
				theme={theme}
				shape={shape}
				size={size}
				reverseDirection={reverseDirection}
				withoutPadding={withoutPadding}>
				{btnContent}
			</Button>
			{isOpen && (
				<ModalTrailerRoot
					{...otherProps}
					isOpen={isOpen}
					closeModal={closeModal}
				/>
			)}
		</>
	);
};
