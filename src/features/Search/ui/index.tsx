'use client';

import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { SearchPanel } from './SearchPanel';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import {
	ContextProvider,
	useInputValue,
	useIsOpen,
	useSetters,
	useSuggests,
} from '../model/context';
import { useNoscroll } from '@/shared/hooks/useNoscroll';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { LoadingBackdrop } from './LoadingBackdrop';
import dynamic from 'next/dynamic';
import { useModel } from '../model';

interface SuggestProps {
	isMobile: boolean;
}

const SuggestList = dynamic(() => import('./SuggestList'), {
	loading: () => <LoadingBackdrop />,
	ssr: false,
});

export const SearchObj = ({ isMobile }: SuggestProps) => {
	const isOpen = useIsOpen();
	const pathname = usePathname();
	const { setValue, setSuggests, setIsOpen } = useSetters();

	// * Затем надо будет добавить поиск по персонам
	useNoscroll(isMobile, isOpen);

	useEffect(() => {
		setValue('');
		setIsOpen(false);
		setSuggests([]);
	}, [pathname, setIsOpen, setValue, setSuggests]);

	useModel();

	return (
		<DropdownWrapper
			setIsOpen={setIsOpen}
			className={!isMobile ? styles.computer : undefined}>
			<SearchPanel isMobile={isMobile} />
			{isOpen ? (
				<div
					className={clsx(styles.suggestContainer, {
						[styles.mobile]: isMobile,
					})}>
					<SuggestList />
				</div>
			) : null}
			{isOpen && isMobile && (
				<div
					className={styles.overlay}
					onClick={() => setIsOpen(false)}></div>
			)}
		</DropdownWrapper>
	);
};

export const Search = ({ isMobile }: SuggestProps) => {
	return (
		<ContextProvider>
			<SearchObj isMobile={isMobile} />
		</ContextProvider>
	);
};
