'use client';

import { clsx } from 'clsx';

import { Profession } from '@/shared/types';
import { Button } from '@/shared/ui/Button';

import { ItemFolderProps } from '../../types';
import styles from './styles.module.scss';

interface AddToFoldersPersonListProps {
	className?: string;
	profession: Profession[] | undefined;
}

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

export const AddToFoldersPersonList = ({
	className,
	profession,
}: AddToFoldersPersonListProps) => {
	let isActor = false;
	let isActress = false;
	let isDirector = false;
	profession?.forEach((prof) => {
		switch (prof.value) {
			case 'Актер':
				isActor = true;
				break;
			case 'Актриса':
				isActress = true;
				break;
			case 'Режиссер':
				isDirector = true;
				break;
		}
	});

	const list: ItemFolderProps[] = [
		{
			text: 'Избранное',
			category: '',
		},
		{
			text: isActor ? 'Актёры' : null,
			category: '',
		},
		{
			text: isActress ? 'Актрисы' : null,
			category: '',
		},
		{
			text: isDirector ? 'Режиссер' : null,
			category: '',
		},
		{
			text: 'Любимые звёзды',
			category: '',
		},
	];

	return (
		<div className={clsx(styles.wrapper, className)}>
			{list.map(({ text, category }, index) =>
				text ? (
					<ItemFolder key={index} text={text} category={category} />
				) : null,
			)}
		</div>
	);
};
