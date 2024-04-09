import { AdditionalInfoList } from '@/features/LinkItemPopover/types';
import { Fragment } from 'react';
import styles from './styles.module.scss';

interface AdditionalInfoListProps {
	additionalInfo: AdditionalInfoList;
}

export const AdditionalInfo = ({ additionalInfo }: AdditionalInfoListProps) => {
	return Object.entries(additionalInfo).map(([key, value], i) =>
		value ? (
			<div
				key={i}
				className={styles.row}>
				<span className={styles.listTitle}>{key}: </span>
				<span className={styles.list}>
					{Array.isArray(value) && value.length
						? value.map((item, j) => (
								<Fragment key={j}>
									{item}
									{j !== value.length - 1 && ', '}
								</Fragment>
						  ))
						: value}
				</span>
			</div>
		) : null
	);
};
