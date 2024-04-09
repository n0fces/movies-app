'use client';

import styles from './styles.module.scss';
import { countries } from '@/shared/constants/countries';
import { genres } from '@/shared/constants/genres';
import { years } from '@/shared/constants/years';
import { DetailsSelectFilter } from '@/shared/ui/DetailsSelectFilter';
import { useModel } from '../../model';
import { useSearchParams } from 'next/navigation';

export const DetailsFilters = () => {
	const searchParams = useSearchParams();
	const model = useModel();

	return (
		<div className={styles.selectOptions}>
			<DetailsSelectFilter
				options={countries}
				title='Страны'
				name='countries'
				value={searchParams.get('countries.name') ?? undefined}
				action={model('countries.name')}
			/>
			<DetailsSelectFilter
				options={genres}
				title='Жанры'
				name='genres'
				value={searchParams.get('genres.name') ?? undefined}
				action={model('genres.name')}
			/>
			<DetailsSelectFilter
				options={years}
				title='Годы'
				name='year'
				value={searchParams.get('year') ?? undefined}
				action={model('year')}
			/>
		</div>
	);
};
