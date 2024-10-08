import styles from './styles.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { TouchModal } from '@/entities/TouchModal';
import { Filter } from '../Filter';
import { countries } from '@/shared/constants/countries';
import { genres } from '@/shared/constants/genres';
import { years } from '@/shared/constants/years';

const BtnContent = () => (
	<Icon
		name='options'
		className={styles.icon}
	/>
);

export const Filters = () => {
	return (
		<TouchModal
		theme='primary'
		borderRadius='8'
			btnContent={BtnContent()}
			className={styles.button}
			title='Фильтры'>
			<Filter
				title='Страны'
				type='countries.name'
				options={countries}
			/>
			<Filter
				title='Жанры'
				type='genres.name'
				options={genres}
			/>
			<Filter
				title='Годы'
				type='year'
				options={years}
			/>
		</TouchModal>
	);
};
