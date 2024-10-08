import { AddToFoldersList } from '@/features/AddToFolders/ui/AddToFoldersList';
import { FeedbackButtons } from '@/features/FeedbackButtons';

import { MoreOptionsDropdown } from '@/entities/MoreOptionsDropdown';

import styles from './styles.module.scss';

interface DropdownOptionsProps {
	className?: string;
}

export const DropdownOptions = ({ className }: DropdownOptionsProps) => {
	return (
		<MoreOptionsDropdown position="right" className={className}>
			<FeedbackButtons />
			<div className={styles.delimiter}></div>
			<div className={styles.title}>Добавить в папку</div>
			<AddToFoldersList />
		</MoreOptionsDropdown>
	);
};
