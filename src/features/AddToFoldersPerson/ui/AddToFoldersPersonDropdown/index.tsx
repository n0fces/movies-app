'use client';

import { useState } from 'react';

import { Profession } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { Icon } from '@/shared/ui/Icon';

import { AddToFoldersPersonList } from '../AddToFoldersPersonList';
import styles from './styles.module.scss';

interface AddToFoldersPersonDropdownProps {
	className?: string;
	profession: Profession[] | undefined;
}

// ! то же самое, что и AddToFoldersDropdown
export const AddToFoldersPersonDropdown = ({
	className,
	profession,
}: AddToFoldersPersonDropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownWrapper setIsOpen={setIsOpen} className={className}>
			<Button
				theme="primary"
				size="size_48"
				shape="rounded"
				maxWidth
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				<Icon name="addToFolder" className={styles.icon} />
				Добавить в папку
			</Button>
			{isOpen && (
				<DropdownBackdrop className={styles.backdrop}>
					<AddToFoldersPersonList profession={profession} />
					<div className={styles.afterSlot}>
						<Button
							as="link"
							href={'#'}
							theme="primary"
							shape="rounded"
							size="size_40"
							maxWidth>
							Все папки
						</Button>
					</div>
				</DropdownBackdrop>
			)}
		</DropdownWrapper>
	);
};
