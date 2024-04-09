import { RefObject, createContext, useContext, useRef } from 'react';

interface IContext {
	carouselRef: RefObject<HTMLUListElement>;
	leftButtonRef: RefObject<HTMLButtonElement>;
	rightButtonRef: RefObject<HTMLButtonElement>;
}

interface ContextProviderProps {
	children: React.ReactNode;
}

const Context = createContext<IContext | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const carouselRef = useRef<HTMLUListElement>(null);
	const leftButtonRef = useRef<HTMLButtonElement>(null);
	const rightButtonRef = useRef<HTMLButtonElement>(null);

	return (
		<Context.Provider
			value={{
				carouselRef,
				leftButtonRef,
				rightButtonRef,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useShare = () => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};

