'use client';

import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

import { useNoscroll } from '@/shared/hooks/useNoscroll';
import { Watchability } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { ModalLoader } from '@/shared/ui/ModalLoader';

interface MoreServicesBtnProps {
	amountServices: number;
	isMobile: boolean;
	watchability: Watchability;
}

const ModalServices = dynamic(() => import('../ModalServicesRoot'), {
	loading: () => <ModalLoader />,
	ssr: false,
});

export const MoreServicesBtn = ({
	amountServices,
	watchability,
	isMobile,
}: MoreServicesBtnProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const showModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	useNoscroll(isMobile, isOpen);

	return (
		<>
			<Button onClick={showModal} id="services" theme="moreButton">
				{amountServices}
			</Button>
			{isOpen && (
				<ModalServices
					watchability={watchability}
					isOpen={isOpen}
					closeModal={closeModal}
				/>
			)}
		</>
	);
};
