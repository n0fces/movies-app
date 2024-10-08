'use client';

import { Icon } from '@/shared/ui/Icon';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { Button } from '@/shared/ui/Button';
import { BaseButtonProps, ThemeButton } from '@/shared/ui/Button/types';

type ThemeFeedbackButtons = Extract<ThemeButton, 'list' | 'modal'>;

interface FeedbackButtonsProps {
	className?: string;
	theme?: ThemeFeedbackButtons;
}

export const FeedbackButtons = ({
	className,
	theme = 'list',
}: FeedbackButtonsProps) => {
	const generalProps: Partial<BaseButtonProps<'button'>> = {
		theme: theme,
				size: theme === 'list' ? 'size_40' : 'size_64',
				withoutPadding: theme === 'modal',
				reverseDirection: theme === 'modal' ? 'rowReverse' : undefined,
	}
	return (
		<div className={clsx(styles.buttonsContainer, className)}>
			<Button
			{...generalProps}
				className={styles[theme]}
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
				{...generalProps}
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
