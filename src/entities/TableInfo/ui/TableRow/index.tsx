import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { InfoItem } from '@/shared/types';

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
