'use client';

import { ThemeButton } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface PlannedToWatchProps {
	className?: string;
	theme?: ThemeButton;
	small?: boolean;
}

export const PlannedToWatch = ({
	className,
	theme = 'useFeature',
	small,
}: PlannedToWatchProps) => {
	return (
		// пока здесь будет функция заглушка, потом мы добавим сюда функцию, которая будет отвечать за добавление фильма в категорию буду смотреть
		<Button
			onClick={() => {}}
			title='Буду смотреть'
			className={className}
			theme={theme}>
			<Icon name='want-to-plan' />
			<span className={small ? 'visually-hidden' : undefined}>
				Буду смотреть
			</span>
		</Button>
	);
};
