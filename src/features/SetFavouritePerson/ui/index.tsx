'use client'

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import styles from './styles.module.scss';

interface SetFavouritePersonProps {
	className?: string;
}

export const SetFavouritePerson = ({ className }: SetFavouritePersonProps) => {
	return (
		<Button
			theme='useFeature'
			className={className}
			onClick={() => {
				// * здесь будет логика по открытию модального окна с фильмом
			}}>
			<Icon
				name='favourite'
				className={styles.icon}
			/>
			Любимая звезда
		</Button>
	);
};
