'use client';

import { Button } from '@/shared/ui/Button';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { Icon } from '@/shared/ui/Icon';
import Link from 'next/link';
import { useState } from 'react';
import { AddToFoldersList } from '../AddToFoldersList';
import styles from './styles.module.scss';

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
						<Button
							component={Link}
							href={'#'}
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
