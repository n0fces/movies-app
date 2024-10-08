import { clsx } from 'clsx';

import { Icon } from '../Icon';
import { Select } from '../Select';
import { SelectProps } from '../Select/types';
import styles from './styles.module.scss';

interface SelectFilter
	extends Omit<SelectProps, 'position' | 'className' | 'description'> {
	title: string;
	className?: string;
}

export const DetailsSelectFilter = ({
	className,
	title,
	options,
	value,
	name,
	action,
}: SelectFilter) => {
	return (
		<details className={clsx(styles.detailsItem, className)} open>
			<summary className={styles.heading}>
				<Icon name="arrow-summary" className={styles.icon} />
				{title}
			</summary>
			<Select
				options={options}
				value={value}
				name={name}
				description={`Выбор категории: ${title}`}
				action={action}
			/>
		</details>
	);
};
