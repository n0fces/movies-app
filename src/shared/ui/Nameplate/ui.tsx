import styles from './styles.module.scss';
import clsx from 'clsx';
import { NameplateProps } from './types';
import { Icon } from '../Icon';
import { canWatchInKP } from '@/shared/helpers/canWatchInKP';

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
