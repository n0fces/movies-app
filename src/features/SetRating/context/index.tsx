'use client';

import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

interface ISetRatingContext {
	rating: number | undefined;
	setRating: Dispatch<SetStateAction<number | undefined>>;
	value: number | undefined;
	setValue: Dispatch<SetStateAction<number | undefined>>;
}

interface ContextProviderProps {
	children: React.ReactNode;
}

const SetRatingContext = createContext<ISetRatingContext | null>(null);

export const SetRatingProvider = ({ children }: ContextProviderProps) => {
	// здесь главное не забудь потом при использовании реального бэка делать запрос на сервер за ним
	const [rating, setRating] = useState<number | undefined>(undefined);
	const [value, setValue] = useState<number | undefined>(undefined);

	return (
		<SetRatingContext.Provider
			value={{
				rating,
				setRating,
				value,
				setValue,
			}}>
			{children}
		</SetRatingContext.Provider>
	);
};

export const useSetRating = () => {
	const context = useContext(SetRatingContext);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};

// * ============================================================================================

interface IIsOpenBarContext {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const IsOpenBarContext = createContext<IIsOpenBarContext | null>(null);

export const IsOpenBarProvider = ({ children }: ContextProviderProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<IsOpenBarContext.Provider
			value={{
				isOpen,
				setIsOpen,
			}}>
			{children}
		</IsOpenBarContext.Provider>
	);
};

export const useIsOpenBar = () => {
	const context = useContext(IsOpenBarContext);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};

// * ================================================================

interface IIsOpenDropdownMenuContext {
	isOpenDropdown: boolean;
	setIsOpenDropdown: Dispatch<SetStateAction<boolean>>;
}

const IsOpenDropdownMenuContext =
	createContext<IIsOpenDropdownMenuContext | null>(null);

export const IsOpenDropdownMenu = ({ children }: ContextProviderProps) => {
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);

	return (
		<IsOpenDropdownMenuContext.Provider
			value={{
				isOpenDropdown,
				setIsOpenDropdown,
			}}>
			{children}
		</IsOpenDropdownMenuContext.Provider>
	);
};

export const useIsOpenDropdownMenu = () => {
	const context = useContext(IsOpenDropdownMenuContext);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};
