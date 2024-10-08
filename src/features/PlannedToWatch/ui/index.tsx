'use client';

import { Button } from '@/shared/ui/Button';
import { BaseButtonProps } from '@/shared/ui/Button/types';
import { Icon } from '@/shared/ui/Icon';
import styles from './styles.module.scss'

interface PlannedToWatchProps extends BaseButtonProps<'button'> {
	className?: string;
	small?: boolean;
}

export const PlannedToWatch = ({
	className,
	small,
	...props
}: PlannedToWatchProps) => {
	return (
		// пока здесь будет функция заглушка, потом мы добавим сюда функцию, которая будет отвечать за добавление фильма в категорию буду смотреть
		<Button
			onClick={() => {}}
			title='Буду смотреть'
			className={className}
			{...props}>
			<Icon name='want-to-plan' className={styles.icon} />
			<span className={small ? 'visually-hidden' : undefined}>
				Буду смотреть
			</span>
		</Button>
	);
};
