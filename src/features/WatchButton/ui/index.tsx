'use client';

import styles from './styles.module.scss';
import { Button } from '@/shared/ui/Button';
import { BaseButtonProps } from '@/shared/ui/Button/types';
import { Icon } from '@/shared/ui/Icon';

interface WatchButtonProps extends Omit<BaseButtonProps<'button'>, 'onClick'> {}

export const WatchButton = (props: WatchButtonProps) => {
	return (
		<Button
			onClick={() => {
				// * здесь будет логика по открытию модального окна с фильмом
			}}
			{...props}>
			<Icon
				name='watch'
				className={styles.icon}
			/>
			Смотреть
		</Button>
	);
};
