import { clsx } from 'clsx';

import { InfoItem } from '@/shared/types';
import { Title } from '@/shared/ui/Title';

import { TableRowMobile } from './TableRowMobile';
import styles from './styles.module.scss';

interface TableInfoMobileProps {
	className?: string;
	title: string;
	infoList: InfoItem[];
}

export const TableInfoMobile = ({
	className,
	title,
	infoList,
}: TableInfoMobileProps) => {
	return (
		<>
			<Title as="h3" size="medium" className={styles.titleHeader}>
				{title}
			</Title>
			<div className={clsx(styles.tableInfoMobile, className)}>
				{infoList.map((item, index) => (
					<TableRowMobile key={index} {...item} />
				))}
			</div>
		</>
	);
};
