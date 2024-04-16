import { Metadata } from 'next';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { Desktop } from '../../ui/Desktop';
import { Mobile } from '../../ui/Mobile';
import { getPerson } from '../../api/getPerson';
import { months } from '@/shared/constants/months';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { getBirthday } from '@/widgets/TableInfoPerson/lib/getBirthday';
import { getProfessions } from '@/widgets/TableInfoPerson/lib/getProfessions';

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
		title: `${name} (${enName}): фильмы, биография, семья, фильмография — KinoStar`,
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

	return !isMobile ? <Desktop id={params.id} /> : <Mobile id={params.id} />;
}
