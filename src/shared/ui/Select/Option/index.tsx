import { Icon } from '@/shared/ui/Icon';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { OptionProps } from '../types';

export interface OptionPropsExtented extends OptionProps {
	choiceAction: (value: string, label: string) => void;
	selectedOptionValue?: string;
	className?: string;
}

export const Option = ({
	value,
	label,
	choiceAction,
	selectedOptionValue,
	className,
}: OptionPropsExtented) => {
	const selected = selectedOptionValue === value;

	return (
		<li
			tabIndex={-1}
			role='option'
			aria-selected={selected}
			onClick={() => choiceAction(value, label)}
			className={clsx(styles.item, className)}>
			{label}
			{selected ? (
				<Icon
					name='selected-option'
					className={styles.icon}
				/>
			) : null}
		</li>
	);
};
