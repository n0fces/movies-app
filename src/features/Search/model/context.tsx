import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react';

import { SearchMovie } from '@/shared/types';

interface ContextProviderProps {
	children: React.ReactNode;
}

interface ContextSettersProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setValue: Dispatch<SetStateAction<string>>;
	setSuggests: Dispatch<SetStateAction<SearchMovie[]>>;
	setIsChange: Dispatch<SetStateAction<boolean>>;
}

const ContextIsOpen = createContext<boolean | null>(null);
const ContextIsLoading = createContext<boolean | null>(null);
const ContextInputValue = createContext<string | null>(null);
const ContextSuggests = createContext<SearchMovie[] | null>(null);
const ContextIsChange = createContext<boolean | null>(null);
const ContextSetters = createContext<ContextSettersProps | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [suggests, setSuggests] = useState<SearchMovie[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [value, setValue] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [isChange, setIsChange] = useState(false);

	const setters = useMemo(
		() => ({ setSuggests, setIsLoading, setValue, setIsOpen, setIsChange }),
		[],
	);

	return (
		<ContextIsOpen.Provider value={isOpen}>
			<ContextIsLoading.Provider value={isLoading}>
				<ContextInputValue.Provider value={value}>
					<ContextSuggests.Provider value={suggests}>
						<ContextIsChange.Provider value={isChange}>
							<ContextSetters.Provider value={setters}>
								{children}
							</ContextSetters.Provider>
						</ContextIsChange.Provider>
					</ContextSuggests.Provider>
				</ContextInputValue.Provider>
			</ContextIsLoading.Provider>
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

export const useIsLoading = () => {
	const context = useContext(ContextIsLoading);
	if (typeof context !== 'boolean') {
		throw new Error('context error');
	}
	return context;
};

export const useInputValue = () => {
	const context = useContext(ContextInputValue);
	if (typeof context !== 'string') {
		throw new Error('context error');
	}
	return context;
};

export const useSuggests = () => {
	const context = useContext(ContextSuggests);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};

export const useIsChange = () => {
	const context = useContext(ContextIsChange);
	if (typeof context !== 'boolean') {
		throw new Error('context error');
	}
	return context;
};

export const useSetters = () => {
	const context = useContext(ContextSetters);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};
