import { ToggleFilters } from '../ToggleFilters';
import { Topbar } from '../Topbar';
import styles from './styles.module.scss';
import { ButtonsWatch } from '../ButtonsWatch';
import CategoryDescription from '@/widgets/CategoryDescription';
import { SelectOptions } from '@/features/SelectOptions';
import { SelectSortType } from '@/features/SelectSortType';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

export const Mobile = ({
	params,
	children,
}: {
	params: { slug: string };
	children: React.ReactNode;
}) => {
	const isMobile = deviceDetectServer();
	return (
		<>
			<Topbar />
			<CategoryDescription params={params} />
			<div>
				<div className={styles.filtersContainer}>
					<div className={styles.filtersList}>
						<SelectOptions />
						<SelectSortType isMobile={isMobile} />
						<ToggleFilters />
					</div>
				</div>
				<ButtonsWatch />
			</div>
			<main className={styles.content}>{children}</main>
		</>
	);
};
