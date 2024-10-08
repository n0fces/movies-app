import { CategoryDescription } from '@/widgets/CategoryDescription';

import { SelectOptions } from '@/features/SelectOptions';

import { ButtonsWatch } from '../ButtonsWatch';
import { ToggleFilters } from '../ToggleFilters';
import { Topbar } from '../Topbar';
import styles from './styles.module.scss';

export const Desktop = ({
	params,
	children,
}: {
	params: { slug: string };
	children: React.ReactNode;
}) => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.topbarSlot}>
				<Topbar />
			</div>
			<aside className={styles.asideSlot}>
				<div className={styles.sticky}>
					<ToggleFilters />
					<SelectOptions />
				</div>
			</aside>
			<main className={styles.contentSlot}>
				<CategoryDescription params={params} />
				<ButtonsWatch />
				{children}
			</main>
		</div>
	);
};
