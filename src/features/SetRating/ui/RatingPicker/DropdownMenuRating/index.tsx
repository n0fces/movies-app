import { Button } from '@/shared/ui/Button';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { clsx } from 'clsx';
import {
	useIsOpenBar,
	useIsOpenDropdownMenu,
	useSetRating,
} from '../../../context';
import styles from './styles.module.scss';

interface DropdownMenuRatingProps {
	className?: string;
}

export const DropdownMenuRating = ({ className }: DropdownMenuRatingProps) => {
	const { setIsOpen } = useIsOpenBar();
	const { setIsOpenDropdown } = useIsOpenDropdownMenu();
	const { setRating, setValue } = useSetRating();
	return (
		<DropdownBackdrop
			className={clsx(styles.dropdownMenuRating, className)}>
			<ul className={styles.dropdownList}>
				<li className={styles.dropdownItem}>
					<Button
						theme='modal'
						onClick={() => {
							setValue(undefined);
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
