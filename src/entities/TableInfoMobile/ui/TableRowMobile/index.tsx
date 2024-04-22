import { InfoItem } from '@/shared/types';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface TableRowMobileProps extends InfoItem {
	className?: string;
}

export const TableRowMobile = ({
	className,
	titleRow,
	valueRow,
	additionalComp,
}: TableRowMobileProps) => {
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
