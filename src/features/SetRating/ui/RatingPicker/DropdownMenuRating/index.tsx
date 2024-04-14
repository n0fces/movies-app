import { Button } from '@/shared/ui/Button';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { clsx } from 'clsx';
import { useEffect, useRef } from 'react';
import {
	useIsOpenDropdownSetter,
	useSettersBase,
	useValueSetter
} from '../../../context';
import styles from './styles.module.scss';

interface DropdownMenuRatingProps {
	className?: string;
}

export const DropdownMenuRating = ({ className }: DropdownMenuRatingProps) => {
	const { setIsOpen, setRating } = useSettersBase();
	const setIsOpenDropdown = useIsOpenDropdownSetter();
	const setValue = useValueSetter();
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		ref.current?.focus();
	}, []);

	return (
		<DropdownBackdrop
			ref={ref}
			tabIndex={0}
			aria-label='Выберите действие'
			className={clsx(styles.dropdownMenuRating, className)}>
			<ul className={styles.dropdownList}>
				<li className={styles.dropdownItem}>
					<Button
						theme='modal'
						onClick={() => {
							setIsOpenDropdown(false);
							setIsOpen(true);
						}}
						className={styles.dropdownBtn}>
						Изменить оценку
					</Button>
				</li>
				<li className={styles.dropdownItem}>
					<Button
						theme='modal'
						onClick={() => {
							// * здесь будет логика по удалению рейтинга из бд
							setRating(undefined);
							setValue(undefined);
							setIsOpenDropdown(false);
						}}
						className={styles.dropdownBtn}>
						Удалить оценку
					</Button>
				</li>
			</ul>
		</DropdownBackdrop>
	);
};
