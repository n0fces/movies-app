import { months } from '@/shared/constants/months';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { BasicMediaPerson } from '@/widgets/BasicMediaPerson';
import { HeaderPersonPage } from '@/widgets/HeaderPersonPage';
import { TableInfoPerson } from '@/widgets/TableInfoPerson';
import { getBirthday } from '@/shared/helpers/getBirthday';
import { getProfessions } from '@/shared/helpers/getProfessions';
import { Metadata } from 'next';
import { getPerson } from '../../api/getPerson';
import { Desktop } from '../../ui/Desktop';
import { MobilePerson } from '../../ui/MobilePerson';
import styles from './styles.module.scss';

export async function generateMetadata({
	params,
}: {
	params: { id: number };
}): Promise<Metadata> {
	const { name, enName, birthday, profession, movies } = await getPerson(
		params.id
	);

	const birthData = getBirthday(birthday);
	let birth: string | null = null;
	if (birthData) {
		const { day, month, year } = birthData;
		birth = `${day} ${months[month]} ${year}`;
	}

	const professions = getProfessions(profession);

	let works: string | null = null;
	if (movies) {
		const worksArr = movies
			.filter((movie) => movie.rating)
			.sort((a, b) => b.rating! - a.rating!)
			.map((movie) => movie.name)
			.slice(0, 5);
		works = `Лучшие фильмы: ${stringWithDelimiter(', ', worksArr)}`;
	}

	return {
		title: `${name}${enName ? `(${enName})` : ''}: фильмы, биография, семья, фильмография — KinoStar`,
		description: stringWithDelimiter('. ', [
			name,
			birth,
			professions,
			works,
		]),
	};
}

export default async function TitleRoot({
	params,
}: {
	params: { id: number };
}) {
	const isMobile = deviceDetectServer();

	return !isMobile ? (
		<Desktop
			basicMediaSection={() => (
				<BasicMediaPerson
					id={params.id}
					className={styles.basicMediaPerson}
				/>
			)}
			headerTitle={() => <HeaderPersonPage id={params.id} />}
			tableInfo={() => <TableInfoPerson id={params.id} />}
		/>
	) : (
		<MobilePerson id={params.id} />
	);
}
