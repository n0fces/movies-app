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
				<li>
					<Button
						theme='list'
						size='size_40'
						maxWidth
						onClick={() => {
							setIsOpenDropdown(false);
							setIsOpen(true);
						}}>
						Изменить оценку
					</Button>
				</li>
				<li>
					<Button
						theme='list'
						size='size_40'
						maxWidth
						onClick={() => {
							// * здесь будет логика по удалению рейтинга из бд
							setRating(undefined);
							setValue(undefined);
							setIsOpenDropdown(false);
						}}>
						Удалить оценку
					</Button>
				</li>
			</ul>
		</DropdownBackdrop>
	);
};
