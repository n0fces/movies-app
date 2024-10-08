import { OptionProps } from '../types';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import styles from './styles.module.scss';

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
			className={className}>
			<Button
				theme='list'
				size='size_40'
				maxWidth
				onClick={() => choiceAction(value, label)}
				className={styles.itemBtn}>
				{label}
				{selected ? (
					<Icon
						name='selected-option'
						className={styles.icon}
					/>
				) : null}
			</Button>
		</li>
	);
};
