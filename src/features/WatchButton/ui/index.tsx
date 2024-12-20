'use client';

import { Button } from '@/shared/ui/Button';
import { ButtonProps } from '@/shared/ui/Button/types';
import { Icon } from '@/shared/ui/Icon';

import styles from './styles.module.scss';

export const WatchButton = (
	props: Omit<ButtonProps<'button'>, 'onClick' | 'children'>,
) => {
	return (
		<Button
			onClick={() => {
				// * здесь будет логика по открытию модального окна с фильмом
			}}
			{...props}>
			<Icon name="watch" className={styles.icon} />
			Смотреть
		</Button>
	);
};
