'use client';

import styles from './styles.module.scss';
import { ChangeEvent, useEffect } from 'react';
import { useDebouce } from '@/shared/hooks/useDebounce';
import { clsx } from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import { useInputValue, useIsOpen } from '../../model/context';
import { usePathname } from 'next/navigation';

interface SearchPanelProps {
	isMobile: boolean;
}

const Input = ({ isMobile }: SearchPanelProps) => {
	const pathname = usePathname();
	const { setValue } = useInputValue();
	const { isOpen, setIsOpen } = useIsOpen();

	useEffect(() => {
		return () => setValue('');
	}, [setValue]);

	return (
		<input
			className={clsx({
				[styles.search]: !isMobile,
				[styles.searchTouch]: isMobile,
				[styles.focus]: isOpen && !isMobile,
			})}
			key={pathname}
			autoFocus={isMobile}
			onFocus={() => setIsOpen(true)}
			type='search'
			placeholder='Фильмы, сериалы, персоны'
			title='Заполните это поле.'
			onChange={useDebouce((e: ChangeEvent<HTMLInputElement>) => {
				setValue(e.target.value);
			}, 500)}
		/>
	);
};

export const SearchPanel = ({ isMobile }: SearchPanelProps) => {
	const { isOpen, setIsOpen } = useIsOpen();

	return isMobile ? (
		<div
			className={clsx(styles.searchContainer, {
				[styles.searchContainerActive]: isOpen,
			})}>
			<button
				className={styles.button}
				aria-label={isOpen ? 'Скрыть поиск' : 'Найти'}
				onClick={() => setIsOpen(!isOpen)}>
				<Icon name='search' />
			</button>
			{isOpen && (
				<>
					<Input isMobile={isMobile} />
					<button
						className={styles.button}
						onClick={() => setIsOpen(false)}>
						<Icon
							name='close'
							className={styles.closeIcon}
						/>
					</button>
				</>
			)}
		</div>
	) : (
		<Input isMobile={isMobile} />
	);
};
