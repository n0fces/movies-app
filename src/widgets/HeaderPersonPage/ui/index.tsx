import { getPerson } from '@/app/(main-root)/(page-id)/api/getPerson';

import { SetFavouritePerson } from '@/features/SetFavouritePerson';

import { HeaderNamespace } from '@/entities/HeaderNamespace';

import styles from './styles.module.scss';

interface HeaderPersonPageProps {
	className?: string;
	id: number;
}

export const HeaderPersonPage = async ({
	className,
	id,
}: HeaderPersonPageProps) => {
	// * надо что-то подумать насчет организации кода
	// * сейчас у меня эта функция написана дважды. Различия только в передаваемом интерфейсе
	const { name, enName } = await getPerson(id);
	return (
		<div className={className}>
			<HeaderNamespace title={name} subtitle={enName}>
				<SetFavouritePerson className={styles.setFavouritePerson} />
			</HeaderNamespace>
		</div>
	);
};
