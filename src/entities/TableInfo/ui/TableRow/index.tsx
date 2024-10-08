import { clsx } from 'clsx';

import { InfoItem } from '@/shared/types';

import styles from './styles.module.scss';

interface TableRowProps extends InfoItem {
	className?: string;
}

export const TableRow = ({
	className,
	titleRow,
	valueRow,
	additionalComp,
}: TableRowProps) => {
	return valueRow ? (
		<div className={clsx(styles.tableRow, className)}>
			<div className={styles.titleRow}>{titleRow}</div>
			<div className={styles.valueRow}>
				<div className={styles.value}>{valueRow}</div>
				{additionalComp ?? null}
			</div>
		</div>
	) : null;
};
