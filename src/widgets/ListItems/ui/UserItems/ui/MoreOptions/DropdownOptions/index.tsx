import styles from './styles.module.scss';
import { FeedbackButtons } from '@/features/FeedbackButtons';
import { MoreOptionsDropdown } from '@/entities/MoreOptionsDropdown';
import { AddToFoldersList } from '@/features/AddToFolders/ui/AddToFoldersList';

interface DropdownOptionsProps {
	className?: string;
}

export const DropdownOptions = ({ className }: DropdownOptionsProps) => {
	return (
		<MoreOptionsDropdown
			position='right'
			theme='clear'
			className={className}>
			<FeedbackButtons />
			<div className={styles.delimiter}></div>
			<div className={styles.title}>Добавить в папку</div>
			<AddToFoldersList />
		</MoreOptionsDropdown>
	);
};
