import { InfoItem } from '@/shared/types';
import { Title } from '@/shared/ui/Title';

import styles from './styles.module.scss';
import { TableRow } from './ui/TableRow';

interface TableInfoProps {
	className?: string;
	/**
	 * Заголовок для таблицы
	 */
	title: string;
	/**
	 * Информация для отображения таблицы
	 */
	infoList: InfoItem[];
}

export const TableInfo = ({ className, title, infoList }: TableInfoProps) => {
	return (
		<div className={className}>
			<Title as="h3" size="medium" className={styles.titleHeader}>
				{title}
			</Title>
			{infoList.map((item, index) => (
				<TableRow
					key={index}
					titleRow={item.titleRow}
					additionalComp={item.additionalComp}
					valueRow={item.valueRow}
				/>
			))}
		</div>
	);
};
