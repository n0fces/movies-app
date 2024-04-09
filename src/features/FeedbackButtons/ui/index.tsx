'use client';

import { Icon } from '@/shared/ui/Icon';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { Button } from '@/shared/ui/Button';
import { ThemeButton } from '@/shared/types';

type ThemeFeedbackButtons = Extract<ThemeButton, 'modal' | 'modalFull'>;

interface FeedbackButtonsProps {
	className?: string;
	theme?: ThemeFeedbackButtons;
}

export const FeedbackButtons = ({
	className,
	theme = 'modal',
}: FeedbackButtonsProps) => {
	return (
		<div className={clsx(styles.buttonsContainer, className)}>
			<Button
				theme={theme}
				className={clsx(styles.button, styles[theme])}
				onClick={() => {
					// Здесь будет логика по отметке фильма в опред категорию
				}}>
				<span className={styles.textButton}>Неинтересно</span>
				<Icon
					name='not-interesting'
					className={styles.iconButton}
				/>
			</Button>
			<Button
				theme={theme}
				className={clsx(styles.button, styles[theme])}
				onClick={() => {
					// Здесь будет логика по отметке фильма в опред категорию
				}}>
				<span className={styles.textButton}>Просмотрено</span>
				<Icon
					name='watched'
					className={styles.iconButton}
				/>
			</Button>
		</div>
	);
};
