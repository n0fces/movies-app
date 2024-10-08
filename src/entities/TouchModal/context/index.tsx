'use client';

import { createContext, useCallback, useContext, useState } from 'react';

interface IContext {
	isOpen: boolean;
	closeModal: () => void;
	showModal: () => void;
}

interface ContextProviderProps {
	children: React.ReactNode;
}

const Context = createContext<IContext | null>(null);

export const TouchModalProvider = ({ children }: ContextProviderProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = useCallback(() => setIsOpen(false), []);
	const showModal = useCallback(() => setIsOpen(true), []);

	return (
		<Context.Provider
			value={{
				isOpen,
				closeModal,
				showModal,
			}}>
			{children}
		</Context.Provider>
	);
};

export const useTouchModal = () => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('context error');
	}
	return context;
};
