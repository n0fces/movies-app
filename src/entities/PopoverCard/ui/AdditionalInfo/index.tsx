import { AdditionalInfoList } from '@/features/LinkItemPopover/types';
import { Fragment } from 'react';
import styles from './styles.module.scss';

interface AdditionalInfoListProps {
	additionalInfo: AdditionalInfoList;
}

export const AdditionalInfo = ({ additionalInfo }: AdditionalInfoListProps) => {
	return Object.entries(additionalInfo).map(([key, value], i) => {
		// Если это массив строк, то делаем проверку на длину этого массива.
		// Если это не массив, то это может быть либо jsx.element, либо null
		const conditional = Array.isArray(value) ? value.length > 0 : value;
		return conditional ? (
			<div
				key={i}
				className={styles.row}>
				<span className={styles.listTitle}>{key}: </span>
				<span className={styles.list}>
					{Array.isArray(value)
						? value.map((item, j) => (
								<Fragment key={j}>
									{item}
									{j !== value.length - 1 && ', '}
								</Fragment>
						  ))
						: value}
				</span>
			</div>
		) : null;
	});
};
