'use client';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import styles from './styles.module.scss';
import { ThemeButton } from '@/shared/types';

interface SetFavouritePersonProps {
	className?: string;
	theme?: ThemeButton;
}

export const SetFavouritePerson = ({
	className,
	theme = 'useFeature',
}: SetFavouritePersonProps) => {
	return (
		<Button
			theme={theme}
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
