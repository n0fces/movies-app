'use client';

import { Button } from '@/shared/ui/Button';
import { useEffect } from 'react';
import { ThemeButton } from '@/shared/types';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { ModalLoader } from '@/shared/ui/ModalLoader';
import { TouchModalProvider, useTouchModal } from './context';

export interface TouchModalProps {
	children: React.ReactNode;
	className?: string;
	theme?: ThemeButton;
	btnContent?: React.ReactNode;
	isTitle?: boolean;
	poster?: string | null;
	title?: string | null;
	secondaryTitle?: string | null;
}

const TouchModalRoot = dynamic(() => import('./ui/TouchModalRoot'), {
	loading: () => <ModalLoader />,
	ssr: false,
});

const TouchModalObj = ({
	children,
	className,
	theme = 'default',
	btnContent,
	...otherProps
}: TouchModalProps) => {
	const { isOpen, closeModal, showModal } = useTouchModal();
	const { title, secondaryTitle } = otherProps;
	const searchParams = useSearchParams();

	const searchParamsStr = JSON.stringify(searchParams);

	useEffect(() => {
		closeModal();
	}, [searchParamsStr, closeModal]);

	return (
		<>
			<Button
				onClick={showModal}
				className={className}
				theme={theme}
				id={`dialog-${title || secondaryTitle}`}>
				{btnContent}
			</Button>
			{isOpen && (
				<TouchModalRoot
					isOpen={isOpen}
					closeModal={closeModal}
					{...otherProps}>
					{children}
				</TouchModalRoot>
			)}
		</>
	);
};

export const TouchModal = (props: TouchModalProps) => (
	<TouchModalProvider>
		<TouchModalObj {...props} />
	</TouchModalProvider>
);
