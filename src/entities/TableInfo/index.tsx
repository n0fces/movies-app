import styles from './styles.module.scss';
import { Title } from '@/shared/ui/Title';
import { InfoItem } from '@/shared/types';
import { TableRow } from './ui/TableRow';

interface TableInfoProps {
	className?: string;
	title: string;
	infoList: InfoItem[];
}

export const TableInfo = ({ className, title, infoList }: TableInfoProps) => {
	return (
		<div className={className}>
			<Title
				as='h3'
				size='medium'
				className={styles.titleHeader}>
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
