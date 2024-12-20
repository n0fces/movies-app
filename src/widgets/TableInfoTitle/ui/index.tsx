import Link from 'next/link';

import { getTitle } from '@/app/(main-root)/(page-id)/api/getTitle';

import { LinkItems } from '@/entities/LinkItems';
import { TableInfo } from '@/entities/TableInfo';

import { ratingMpaaDescription } from '@/shared/constants/ratingMpaaDescription';
import { getPath } from '@/shared/helpers/getPath';
import { setCorrectEndWord } from '@/shared/helpers/setCorrectEndWord';
import { sortPersons } from '@/shared/helpers/sortPersons/sortPersons';
import { InfoItem, LinkItem } from '@/shared/types';

import { getDurationString } from '../lib/getDurationString/getDurationString';
import styles from './styles.module.scss';
import { Audiences } from './ui/Audiences';
import { LinkItemsPersons } from './ui/LinkItemsPersons';

export interface SortedAudience {
	count: number;
	country: string;
}

interface TableInfoProps {
	className?: string;
	/**
	 * По id будет сделан запрос для получения информации о фильме
	 */
	id: number;
}

export const TableInfoTitle = async ({ className, id }: TableInfoProps) => {
	const {
		isSeries,
		year,
		ageRating,
		persons,
		seasonsInfo,
		countries,
		genres,
		fees,
		budget,
		slogan,
		premiere,
		ratingMpaa,
		audience,
		seriesLength,
		movieLength,
	} = await getTitle(id);
	const stuff = sortPersons(persons);

	const popularLink = (filter: string) =>
		isSeries
			? getPath.popularSeriesFilter(filter)
			: getPath.popularMoviesFilter(filter);

	const countriesList: LinkItem[] | undefined = countries
		?.filter((country): country is { name: string } => Boolean(country.name))
		.map((country) => ({
			name: country.name,
			href: popularLink(`countries.name=${country.name}`),
		}));

	const genresList: LinkItem[] | undefined = genres
		?.filter((genre): genre is { name: string } => Boolean(genre.name))
		.map((genre) => ({
			name: genre.name,
			href: popularLink(`genres.name=${genre.name}`),
		}));

	const audienceList: SortedAudience[] | undefined = audience?.filter(
		(audience): audience is SortedAudience =>
			Boolean(audience.count && audience.country),
	);

	const infoList: InfoItem[] = [
		{
			titleRow: 'Год производства',
			valueRow: year && (
				<>
					<Link href={popularLink(`year=${year}`)}>{year}</Link>
					{seasonsInfo?.length ? (
						<>
							{' '}
							{'('}
							<Link href={'#'}>
								{seasonsInfo.length}{' '}
								{setCorrectEndWord('сезон', seasonsInfo.length % 10)}
							</Link>
							{')'}
						</>
					) : null}
				</>
			),
		},
		{
			titleRow: 'Страна',
			valueRow: countries?.length ? <LinkItems array={countriesList} /> : null,
		},
		{
			titleRow: 'Жанр',
			valueRow: genres?.length ? <LinkItems array={genresList} /> : null,
			additionalComp: (
				<Link href={'#'} className={styles.additionalLink}>
					слова
				</Link>
			),
		},
		{
			titleRow: 'Слоган',
			valueRow: slogan ? `«${slogan}»` : '—',
		},
		{
			titleRow: 'Режиссер',
			valueRow: stuff.director.length ? (
				<LinkItemsPersons array={stuff.director} />
			) : null,
		},
		{
			titleRow: 'Сценарий',
			valueRow: stuff.writer.length ? (
				<LinkItemsPersons array={stuff.writer} />
			) : null,
		},
		{
			titleRow: countries?.find((country) => country.name === 'СССР')
				? 'Директор фильма'
				: 'Продюсер',
			valueRow: stuff.producer.length ? (
				<LinkItemsPersons array={stuff.producer} />
			) : null,
		},
		{
			titleRow: 'Оператор',
			valueRow: stuff.operator.length ? (
				<LinkItemsPersons array={stuff.operator} />
			) : null,
		},
		{
			titleRow: 'Композитор',
			valueRow: stuff.composer.length ? (
				<LinkItemsPersons array={stuff.composer} />
			) : null,
		},
		{
			titleRow: 'Художник',
			valueRow: stuff.designer.length ? (
				<LinkItemsPersons array={stuff.designer} />
			) : null,
		},
		{
			titleRow: 'Монтаж',
			valueRow: stuff.editor.length ? (
				<LinkItemsPersons array={stuff.editor} />
			) : null,
		},
		{
			titleRow: 'Бюджет',
			valueRow:
				budget?.currency &&
				budget.value &&
				`${budget.currency}${budget.value.toLocaleString('ru-RU')}`,
		},
		{
			titleRow: 'Сборы в США',
			valueRow:
				fees?.usa?.currency &&
				fees.usa.value &&
				`${fees.usa.currency}${fees.usa.value.toLocaleString('ru-RU')}`,
		},
		{
			titleRow: 'Сборы в мире',
			valueRow:
				fees?.world?.value &&
				fees.usa?.value &&
				`+${fees.usa.currency}${(
					Number(fees.world.value) - Number(fees.usa.value)
				).toLocaleString('ru-RU')}=${
					fees.usa.currency
				}${fees.world.value.toLocaleString('ru-RU')}`,
		},
		{
			titleRow: 'Зрители',
			valueRow: audienceList?.length ? (
				<Audiences audience={audienceList} />
			) : null,
		},
		{
			titleRow: 'Премьера в России',
			valueRow:
				premiere?.russia &&
				new Date(premiere.russia).toLocaleDateString('ru', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				}),
		},
		{
			titleRow: 'Премьера в мире',
			valueRow:
				premiere?.world &&
				new Date(premiere.world).toLocaleDateString('ru', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				}),
		},
		{
			titleRow: 'Релиз на DVD',
			valueRow:
				premiere?.dvd &&
				new Date(premiere.dvd).toLocaleDateString('ru', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				}),
		},
		{
			titleRow: 'Возраст',
			valueRow: ageRating && (
				<span className={styles.highContrast}>{ageRating}+</span>
			),
		},
		{
			titleRow: 'Рейтинг MPAA',
			valueRow: ratingMpaa && (
				<Link href={'#'} className={styles.restrictionLink}>
					<div className={styles.highContrast}>{ratingMpaa.toUpperCase()}</div>
					<div className={styles.restrictionDescription}>
						{ratingMpaaDescription[ratingMpaa]}
					</div>
				</Link>
			),
		},
		{
			titleRow: 'Время',
			valueRow: getDurationString(isSeries ? seriesLength : movieLength),
		},
	];

	return (
		<TableInfo
			title={isSeries ? 'О сериале' : 'О Фильме'}
			infoList={infoList}
			className={className}
		/>
	);
};
