import { SearchMovie } from '@/shared/types';
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

interface ContextIsOpenProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface ContextIsLoadingProps {
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface ContextInputValueProps {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
}

interface ContextSuggestsProps {
	suggests: SearchMovie[];
	setSuggests: Dispatch<SetStateAction<SearchMovie[]>>;
}


const ContextIsOpen = createContext<ContextIsOpenProps | null>(null);
const ContextIsLoading = createContext<ContextIsLoadingProps | null>(null);
const ContextInputValue = createContext<ContextInputValueProps | null>(null);
const ContextSuggests = createContext<ContextSuggestsProps | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [suggests, setSuggests] = useState<SearchMovie[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [value, setValue] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ContextIsOpen.Provider value={{ isOpen, setIsOpen }}>
			<ContextIsLoading.Provider value={{ isLoading, setIsLoading }}>
				<ContextInputValue.Provider value={{ value, setValue }}>
					<ContextSuggests.Provider value={{ suggests, setSuggests }}>
						{children}
					</ContextSuggests.Provider>
				</ContextInputValue.Provider>
			</ContextIsLoading.Provider>
		</ContextIsOpen.Provider>
	);
};

export const useIsOpen = () => {
	const context = useContext(ContextIsOpen);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};

export const useIsLoading = () => {
	const context = useContext(ContextIsLoading);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};

export const useInputValue = () => {
	const context = useContext(ContextInputValue);
	if (!context) {
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
