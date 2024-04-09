'use client';

import styles from './styles.module.scss';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface WatchButtonProps {
	className?: string;
}

export const WatchButton = ({ className }: WatchButtonProps) => {
	return (
		<Button
			theme='gradient'
			className={className}
			onClick={() => {
				// * здесь будет логика по открытию модального окна с фильмом
			}}>
			<Icon
				name='watch'
				className={styles.icon}
			/>
			Смотреть
		</Button>
	);
};
