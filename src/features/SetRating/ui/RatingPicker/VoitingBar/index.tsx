import { clsx } from 'clsx';
import { useEffect, useRef } from 'react';

import { Icon } from '@/shared/ui/Icon';

import { useSettersBase } from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';
import styles from './styles.module.scss';

interface VoitingBarProps {
	className?: string;
}

export const VoitingBar = ({ className }: VoitingBarProps) => {
	const { setRating, setIsOpen } = useSettersBase();
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		ref.current?.focus();
	}, []);

	return (
		<div
			className={clsx(styles.voitingBar, className)}
			aria-label="Панель выставления рейтинга"
			tabIndex={0}
			ref={ref}>
			<Icon name="star" className={styles.iconStar} />
			{[...Array(10)].map((_, i) => {
				i = i + 1;
				return (
					<button
						key={i}
						aria-label={`Оценка ${i}`}
						onClick={() => {
							setRating(i);
							setIsOpen(false);
							// * здесь будет логика по установлению рейтинга со стороны пользователя
						}}
						className={clsx(styles.button, setColorClasses(styles, i, i))}>
						{i}
					</button>
				);
			})}
		</div>
	);
};
