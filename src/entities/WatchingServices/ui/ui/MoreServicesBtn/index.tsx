'use client';

import styles from './styles.module.scss';
import { useCallback, useState } from 'react';
import { Watchability } from '@/shared/types';
import { useNoscroll } from '@/shared/hooks/useNoscroll';
import dynamic from 'next/dynamic';
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
			<button
				onClick={showModal}
				id='services'
				className={styles.moreServicesBtn}>
				{amountServices}
			</button>
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
