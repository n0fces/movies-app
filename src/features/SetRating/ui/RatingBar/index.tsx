'use client';

import styles from './styles.module.scss';
import { Voiting } from './Voiting';
import { Separator } from './Separator';
import { Indicator } from './Indicator';
import { RatingButton } from './RatingButton';
import { clsx } from 'clsx';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import {
	IsOpenBarProvider,
	SetRatingProvider,
	useIsOpenBar,
} from '../../context';

interface SetRatingProps {
	className?: string;
}

export const RatingBarObj = ({ className }: SetRatingProps) => {
	// * по умолчанию потом будет браться значение с бд. Если оно есть, то сразу будет установлено. При установленном значении мы сможем сначала только убрать текущий рейтинг, а потом снова выбрать
	const { isOpen, setIsOpen } = useIsOpenBar();

	return (
		<DropdownWrapper
			setIsOpen={setIsOpen}
			className={clsx(styles.choiceContainer, className)}>
			{/* если рейтинг уже есть, то здесь у кнопки появится title='Удалить оценку', а вместо иконки будет значение с бд с соответствующими стилями */}
			<RatingButton />
			{isOpen && (
				<div className={styles.choiceBar}>
					<Voiting />
					<Separator />
					<Indicator />
				</div>
			)}
		</DropdownWrapper>
	);
};

export const RatingBar = ({ className }: SetRatingProps) => (
	<SetRatingProvider>
		<IsOpenBarProvider>
			<RatingBarObj className={className} />
		</IsOpenBarProvider>
	</SetRatingProvider>
);
