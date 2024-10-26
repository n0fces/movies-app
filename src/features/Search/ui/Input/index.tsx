import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { ChangeEvent, useEffect } from 'react';

import { useDebouce } from '@/shared/hooks/useDebounce';

import { useIsOpen, useSetters } from '../../model/context';
import { SearchPanelProps } from '../SearchPanel';
import styles from './styles.module.scss';

export const Input = ({ isMobile }: SearchPanelProps) => {
	const pathname = usePathname();
	const { setValue, setIsOpen, setIsChange, setSuggests } = useSetters();
	const isOpen = useIsOpen();

	useEffect(() => {
		return () => {
			if (isMobile) {
				setValue('');
				setIsChange(false);
				setSuggests([]);
			}
		};
	}, [setIsChange, setValue, isMobile, setSuggests]);

	return (
		<input
			className={clsx({
				[styles.search]: !isMobile,
				[styles.searchTouch]: isMobile,
				[styles.focus]: isOpen && !isMobile,
			})}
			key={pathname}
			autoFocus={isMobile}
			onFocus={() => { setIsOpen(true); }}
			type="search"
			placeholder="Фильмы, сериалы, персоны"
			title="Заполните это поле."
			onChange={useDebouce((e: ChangeEvent<HTMLInputElement>) => {
				setValue(e.target.value);
				setIsChange(true);
			}, 500)}
		/>
	);
};
