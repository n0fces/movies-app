'use client';

import { clsx } from 'clsx';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

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
			<Button
				size="size_24"
				withoutPadding
				aria-label={'Найти'}
				onClick={() => {
					setIsOpen(true);
				}}>
				<Icon name="search" className={styles.icon} />
			</Button>
			{isOpen && (
				<div
					className={clsx(styles.searchContainer, {
						[styles.searchContainerActive]: isOpen,
					})}>
					<Button
						size="size_24"
						withoutPadding
						aria-label={'Скрыть поиск'}
						onClick={() => {
							setIsOpen(false);
						}}>
						<Icon name="search" className={styles.icon} />
					</Button>
					<Input isMobile={isMobile} />
					<Button
						size="size_24"
						withoutPadding
						onClick={() => {
							setIsOpen(false);
						}}>
						<Icon
							name="close"
							className={clsx(styles.icon, styles.closeIcon)}
						/>
					</Button>
				</div>
			)}
		</>
	) : (
		<Input isMobile={isMobile} />
	);
};
