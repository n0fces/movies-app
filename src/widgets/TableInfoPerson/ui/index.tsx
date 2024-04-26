import { getPerson } from '@/app/(main-root)/(page-id)/api/getPerson';
import { TableInfo } from '@/entities/TableInfo';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { InfoItem } from '@/shared/types';
import { getDatePersonString } from '../../../shared/helpers/getDatePersonString';
import { getGrowth } from '../../../shared/helpers/getGrowth';
import { getProfessions } from '../../../shared/helpers/getProfessions';
import { getSpousesData } from '../lib/getSpousesData';

interface TableInfoPersonProps {
	className?: string;
	id: number;
}

export const TableInfoPerson = async ({
	className,
	id,
}: TableInfoPersonProps) => {
	const {
		profession,
		growth,
		birthday,
		age,
		birthPlace,
		death,
		movies,
		spouses,
		sex,
	} = await getPerson(id);

	const professions = getProfessions(profession);
	const growthArr = getGrowth(growth);
	const birth = getDatePersonString(birthday, age, true);
	const deathStr = getDatePersonString(death);
	const countMovies = movies?.length ?? 0;
	const spousesList = getSpousesData(spouses);

	const birthPlaceArr = birthPlace
		?.filter((place) => place.value)
		.map((place) => place.value);

	const infoList: InfoItem[] = [
		{
			titleRow: 'Карьера',
			valueRow: professions,
		},
		{
			titleRow: 'Рост',
			valueRow: growthArr ? `${growthArr[0]}.${growthArr[1]} м` : null,
		},
		{
			titleRow: 'Дата рождения',
			valueRow: birth,
		},
		{
			titleRow: 'Место рождения',
			valueRow: stringWithDelimiter(', ', birthPlaceArr) ?? null,
		},
		{
			titleRow: 'Дата смерти',
			valueRow: deathStr,
		},
		{
			titleRow: sex === 'Мужской' ? 'Супруга' : 'Супруг',
			valueRow: spousesList,
		},
		{
			titleRow: 'Всего фильмов',
			valueRow: countMovies,
		},
	];

	return (
		<TableInfo
			title={'О персоне'}
			infoList={infoList}
			className={className}
		/>
	);
};
