'use client';

import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Button } from '@/shared/ui/Button';
import { AddToFoldersProps, ItemFolderProps } from '../../types';
import { list } from '../../constants';

const ItemFolder = ({ category, text }: ItemFolderProps) => (
	<Button
		theme='modal'
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
				<ItemFolder
					key={category}
					{...item}
				/>
			))}
		</div>
	);
};
