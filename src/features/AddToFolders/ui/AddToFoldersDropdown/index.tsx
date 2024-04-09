'use client';

import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { AddToFoldersList } from '../AddToFoldersList';

interface AddToFoldersDropdownProps {
	className?: string;
}

export const AddToFoldersDropdown = ({
	className,
}: AddToFoldersDropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownWrapper
			setIsOpen={setIsOpen}
			className={className}>
			<Button
				theme='useFeature'
				onClick={() => setIsOpen(!isOpen)}
				className={styles.addToFoldersDropdown}>
				<Icon
					name='addToFolder'
					className={styles.icon}
				/>
				Добавить в папку
			</Button>
			{isOpen && (
				<DropdownBackdrop className={styles.backdrop}>
					<AddToFoldersList />
					<div className={styles.afterSlot}>
						{/* пока поставлю кнопку, но вообще здесь надо использовать ссылку */}
						<Button
							theme='useFeature'
							className={styles.allFolders}>
							Все папки
						</Button>
					</div>
				</DropdownBackdrop>
			)}
		</DropdownWrapper>
	);
};
