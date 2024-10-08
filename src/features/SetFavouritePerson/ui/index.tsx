'use client';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import styles from './styles.module.scss';
import { ShapeButton, SizeButton, ThemeButton } from '@/shared/ui/Button/types';

interface SetFavouritePersonProps {
	className?: string;
	theme?: ThemeButton;
	shape?: ShapeButton;
	size?: SizeButton;
	withoutPadding?: boolean;
}

export const SetFavouritePerson = ({
	className,
	theme = 'primary',
	shape = 'rounded',
	size,
	withoutPadding,
}: SetFavouritePersonProps) => {
	return (
		<Button
			theme={theme}
			shape={shape}
			size={size}
			withoutPadding={withoutPadding}
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
