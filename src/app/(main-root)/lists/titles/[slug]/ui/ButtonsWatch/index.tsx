import { clsx } from 'clsx';

import { SelectSortType } from '@/features/SelectSortType';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

import styles from './styles.module.scss';
import { ButtonWatch } from './ui/ButtonWatch';

export const ButtonsWatch = () => {
	const isMobile = deviceDetectServer();

	return (
		<div className={clsx(styles.root, { [styles.rootFull]: !isMobile })}>
			<div className={styles.buttons}>
				<ButtonWatch
					text="Онлайн"
					watchability="Kinopoisk HD"
					className={styles.button}
				/>
				<ButtonWatch text="Все" className={styles.button} />
			</div>
			{!isMobile && <SelectSortType isMobile={isMobile} />}
		</div>
	);
};
