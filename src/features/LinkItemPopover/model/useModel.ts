import {
	Dispatch,
	MouseEvent,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react';

import { useHover } from '@/shared/hooks/useHover';

import { Data } from '../ui/LinkItemTitle';

const DURING = 300;
const SIZE_WIDTH = 380;
const SIZE_HEIGHT = 220;
const GAP = 15;

type MouseHoverEvent =
	| MouseEvent<HTMLAnchorElement>
	| MouseEvent<HTMLSpanElement>;

export interface useModelReturned {
	onMouseLeave: () => void;
	onMouseEnter: () => void;
	top: number;
	left: number;
	isLoading: boolean;
	isOpen: boolean;
	setPosition: (e: MouseHoverEvent) => void;
}

export const useModel = (
	data: Data,
	setData: Dispatch<SetStateAction<Data>>,
	response: () => Promise<Data>,
): useModelReturned => {
	const { isHover, onMouseEnter, onMouseLeave } = useHover();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	const setPosition = useCallback(
		(e: MouseHoverEvent) => {
			if (!isHover) {
				const isCanRight = window.innerWidth - e.clientX > SIZE_WIDTH + 2 * GAP;
				const isCanBottom =
					window.innerHeight - e.clientY > SIZE_HEIGHT + 2 * GAP;
				const left = isCanRight ? e.pageX + GAP : e.pageX - SIZE_WIDTH;
				const top = isCanBottom ? e.pageY + GAP : e.pageY - SIZE_HEIGHT;
				setTop(top);
				setLeft(left);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	useEffect(() => {
		const timerRef = setTimeout(() => {
			if (isHover) {
				setIsOpen(true);
				if ((data === null || data === undefined) && !isLoading) {
					setIsLoading(true);
					void (async () => {
						try {
							const res = await response();
							setData(res);
						} catch (error) {
							// здесь надо будет не общим образом отлавливать ошибку. Здесь надо как-то отображать на карточке каокй-то занимательный контент
							throw error;
						} finally {
							setIsLoading(false);
						}
					})();
				}
			} else {
				setIsOpen(false);
			}
		}, DURING);
		return () => {
			clearTimeout(timerRef);
		};
	}, [isHover]);

	return {
		onMouseLeave,
		onMouseEnter,
		top,
		left,
		isLoading,
		isOpen,
		setPosition,
	};
};
