'use client';

import { Profession } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { Icon } from '@/shared/ui/Icon';
import Link from 'next/link';
import { useState } from 'react';
import { AddToFoldersPersonList } from '../AddToFoldersPersonList';
import styles from './styles.module.scss';

interface AddToFoldersPersonDropdownProps {
	className?: string;
	profession: Profession[] | undefined;
}

export const AddToFoldersPersonDropdown = ({
	className,
	profession,
}: AddToFoldersPersonDropdownProps) => {
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
					<AddToFoldersPersonList profession={profession} />
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
