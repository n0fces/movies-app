'use client';

import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react';

interface ContextProviderProps {
	children: React.ReactNode;
}

interface ContextSettersBaseProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	setRating: Dispatch<SetStateAction<number | undefined>>;
}

const ContextIsOpen = createContext<boolean | null>(null);
const ContextRating = createContext<number | undefined>(undefined);
const ContextSettersBase = createContext<ContextSettersBaseProps | null>(null);

export const SetRatingBaseProvider = ({ children }: ContextProviderProps) => {
	const [rating, setRating] = useState<number | undefined>(undefined);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ContextIsOpen.Provider value={isOpen}>
			<ContextRating.Provider value={rating}>
				<ContextSettersBase.Provider
					value={{
						setRating,
						setIsOpen,
					}}>
					{children}
				</ContextSettersBase.Provider>
			</ContextRating.Provider>
		</ContextIsOpen.Provider>
	);
};

export const useIsOpen = () => {
	const context = useContext(ContextIsOpen);
	if (typeof context !== 'boolean') {
		throw new Error('context error');
	}
	return context;
};

export const useRating = () => {
	const context = useContext(ContextRating);
	return context;
};

export const useSettersBase = () => {
	const context = useContext(ContextSettersBase);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};

const ContextValue = createContext<number | undefined>(undefined);
const ContextValueSetter = createContext<Dispatch<
	SetStateAction<number | undefined>
> | null>(null);
export const ContextValueProvider = ({ children }: ContextProviderProps) => {
	const [value, setValue] = useState<number | undefined>(undefined);

	return (
		<ContextValue.Provider value={value}>
			<ContextValueSetter.Provider value={setValue}>
				{children}
			</ContextValueSetter.Provider>
		</ContextValue.Provider>
	);
};

export const useValue = () => {
	const context = useContext(ContextValue);
	return context;
};

export const useValueSetter = () => {
	const context = useContext(ContextValueSetter);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};

const ContextIsOpenDropdown = createContext<boolean | null>(null);
const ContextIsOpenDropdownSetter = createContext<Dispatch<
	SetStateAction<boolean>
> | null>(null);
export const ContextIsOpenDropdownProvider = ({
	children,
}: ContextProviderProps) => {
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);

	return (
		<ContextIsOpenDropdown.Provider value={isOpenDropdown}>
			<ContextIsOpenDropdownSetter.Provider value={setIsOpenDropdown}>
				{children}
			</ContextIsOpenDropdownSetter.Provider>
		</ContextIsOpenDropdown.Provider>
	);
};

export const useIsOpenDropdown = () => {
	const context = useContext(ContextIsOpenDropdown);
	if (typeof context !== 'boolean') {
		throw new Error('context error');
	}
	return context;
};

export const useIsOpenDropdownSetter = () => {
	const context = useContext(ContextIsOpenDropdownSetter);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};
