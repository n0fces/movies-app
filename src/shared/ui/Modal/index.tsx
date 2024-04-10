import { clsx } from 'clsx';
import { Portal } from '../Portal';
import styles from './styles.module.scss';
import { useCallback, useEffect, useRef } from 'react';

interface ModalProps extends React.ComponentProps<'dialog'> {
	closeModal: () => void;
	isOpen: boolean;
}

export const Modal = ({
	className,
	children,
	closeModal,
	isOpen,
	...otherProps
}: ModalProps) => {
	// * сейчас после первого открытия модального окна оно остается в дом дереве, чтобы фокус после закрытия окна переходил на последний перед открытием элемент в фокусе
	const dialogRef = useRef<HTMLDialogElement>(null);
	// * нужно не забыть подключать полифил на тот случай, если в браузере пользователя не поддерживается данный тег
	const showModal = useCallback(() => {
		dialogRef.current?.showModal();
	}, []);
	const unmountModal = useCallback(() => {
		dialogRef.current?.close();
		closeModal();
	}, [closeModal]);
	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') unmountModal();
		},
		[unmountModal]
	);
	const focusTrap = useCallback((e: KeyboardEvent) => {
		// * потом надо фиксануть это. При каждом нажатии на клавишу будет срабатывать этот поиск интерактивных элементов. Но пока это работает
		const focusableElements =
			dialogRef.current?.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
		let firstElement: HTMLElement | undefined,
			lastElement: HTMLElement | undefined;
		if (focusableElements) {
			firstElement = focusableElements[0];
			lastElement = focusableElements[focusableElements.length - 1];
		}
		if (e.key === 'Tab') {
			if (e.shiftKey && document.activeElement === firstElement) {
				e.preventDefault();
				lastElement?.focus();
			} else if (!e.shiftKey && document.activeElement === lastElement) {
				e.preventDefault();
				firstElement?.focus();
			}
		}
	}, []);
	const clickByBackdrop = useCallback(
		({ currentTarget, target }: MouseEvent) => {
			const dialogElement = currentTarget;
			const isClickedOnBackDrop = target === dialogElement;
			if (isClickedOnBackDrop) {
				unmountModal();
			}
		},
		[unmountModal]
	);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (isOpen) {
			document.body.classList.add('noscroll');
			dialog?.addEventListener('keydown', onKeyDown);
			dialog?.addEventListener('keydown', focusTrap);
			dialog?.addEventListener('click', clickByBackdrop);
			showModal();
		}

		return () => {
			if (document.getElementById('modal-root')?.children.length === 0) {
				document.body.classList.remove('noscroll');
			}
			dialog?.removeEventListener('keydown', onKeyDown);
			dialog?.addEventListener('keydown', focusTrap);
			dialog?.addEventListener('click', clickByBackdrop);
		};
	}, [
		isOpen,
		showModal,
		unmountModal,
		onKeyDown,
		focusTrap,
		clickByBackdrop,
	]);

	return isOpen ? (
		<Portal element={document.getElementById('modal-root')!}>
			<dialog
				ref={dialogRef}
				className={clsx(styles.dialog, className)}
				{...otherProps}>
				{children}
			</dialog>
		</Portal>
	) : null;
};
