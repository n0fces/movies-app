import { Metadata } from 'next';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import { Desktop } from '../../ui/Desktop';
import { Mobile } from '../../ui/Mobile';
import { getPerson } from '../../api/getPerson';
import { months } from '@/shared/constants/months';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';

export async function generateMetadata({
	params,
}: {
	params: { id: number };
}): Promise<Metadata> {
	const { name, enName, birthday, profession, movies } = await getPerson(
		params.id
	);

	let birth: string | null = null;
	if (birthday) {
		const date = new Date(birthday);
		const day = date.getDate();
		const month = months[date.getMonth()];
		const year = date.getFullYear();

		birth = `${day} ${month} ${year}`;
	}

	let professions: string | null = null;
	if (profession) {
		const profArr = profession.filter((prof) => prof.value);
		professions = stringWithDelimiter(', ', profArr) ?? null;
	}
	let works: string | null = null;
	if (movies) {
		const worksArr = movies
			.filter((movie) => movie.rating)
			.sort((a, b) => b.rating! - a.rating!)
			.slice(0, 5);
		works = `Лучшие фильмы: ${stringWithDelimiter(', ', worksArr)}`;
	}

	return {
		title: `${name} (${enName}): фильмы, биография, семья, фильмография — KinoStar`,
		description: stringWithDelimiter('. ', [name, birth, professions, works]),
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
