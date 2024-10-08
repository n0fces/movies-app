import clsx from 'clsx';

import { canWatchInKP } from '@/shared/helpers/canWatchInKP';

import { Icon } from '../Icon';
import styles from './styles.module.scss';
import { NameplateProps } from './types';

export const Nameplate = ({
	ticketsOnSale,
	className,
	watchability,
}: NameplateProps) => {
	return Boolean(ticketsOnSale) || Boolean(canWatchInKP(watchability)) ? (
		<div className={clsx(styles.nameplate, className)}>
			<Icon
				className={styles.icon}
				name={Boolean(ticketsOnSale) ? 'ticket' : 'watch'}
			/>
			<span>{Boolean(ticketsOnSale) ? 'Билеты' : 'Смотреть'}</span>
		</div>
	) : null;
};
