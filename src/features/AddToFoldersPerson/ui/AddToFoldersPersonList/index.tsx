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

const ItemFolder = ({
	// * закомментировал, чтобы держал в голове о том, что здесь будет в будущем норм функциональность
	// category,
	text,
}: ItemFolderProps) => (
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
	if (!profession) return null;

	const filteredProf = profession.filter(
		(prof): prof is Profession & { value: string } => Boolean(prof.value),
	);

	const { isActor, isActress, isDirector } = filteredProf.reduce(
		(acc, prof) => {
			switch (prof.value) {
				case 'Актер':
					acc.isActor = true;
					break;
				case 'Актриса':
					acc.isActress = true;
					break;
				case 'Режиссер':
					acc.isDirector = true;
					break;
			}
			return acc;
		},
		{ isActor: false, isActress: false, isDirector: false },
	);

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
