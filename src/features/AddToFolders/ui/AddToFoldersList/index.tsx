'use client';

import { clsx } from 'clsx';

import { Button } from '@/shared/ui/Button';

import { list } from '../../constants';
import { AddToFoldersProps, ItemFolderProps } from '../../types';
import styles from './styles.module.scss';

const ItemFolder = ({ category, text }: ItemFolderProps) => (
	<Button
		theme="list"
		size="size_40"
		className={styles.button}
		onClick={() => {
			// * здесь будет логика по добавлению тайтла в папку
		}}>
		{text}
	</Button>
);

export const AddToFoldersList = ({ className }: AddToFoldersProps) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			{list.map((item, category) => (
				<ItemFolder key={category} {...item} />
			))}
		</div>
	);
};
