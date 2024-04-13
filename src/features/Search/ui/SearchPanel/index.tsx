'use client';

import { Icon } from '@/shared/ui/Icon';
import { clsx } from 'clsx';
import { useIsOpen, useSetters } from '../../model/context';
import { Input } from '../Input';
import styles from './styles.module.scss';

export interface SearchPanelProps {
	isMobile: boolean;
}

export const SearchPanel = ({ isMobile }: SearchPanelProps) => {
	const { setIsOpen } = useSetters();
	const isOpen = useIsOpen();

	return isMobile ? (
		<>
			<button
				className={styles.button}
				aria-label={'Найти'}
				onClick={() => setIsOpen(true)}>
				<Icon name='search' />
			</button>
			{isOpen && (
				<div
					className={clsx(styles.searchContainer, {
						[styles.searchContainerActive]: isOpen,
					})}>
					<button
						className={styles.button}
						aria-label={'Скрыть поиск'}
						onClick={() => setIsOpen(false)}>
						<Icon name='search' />
					</button>
					<Input isMobile={isMobile} />
					<button
						className={styles.button}
						onClick={() => setIsOpen(false)}>
						<Icon
							name='close'
							className={styles.closeIcon}
						/>
					</button>
				</div>
			)}
		</>
	) : (
		<Input isMobile={isMobile} />
	);
};
