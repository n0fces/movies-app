'use client'

import { ListItemProps, ThemeButton } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { ModalLoader } from '@/shared/ui/ModalLoader';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

interface ModalTrailerProps extends ListItemProps {
	className?: string;
	isSidebar?: boolean;
	theme?: ThemeButton;
	btnContent?: React.ReactNode;
}

const ModalTrailerRoot = dynamic(() => import('./ModalTrailerRoot'), {
	loading: () => <ModalLoader />,
	ssr: false,
});

export const ModalTrailer = ({
	className,
	theme = 'default',
	btnContent,
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
				theme={theme}>
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
