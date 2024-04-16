import { BasicMediaSection } from '@/widgets/BasicMediaSection';
import { HeaderTitlePage } from '@/widgets/HeaderTitlePage';
import { TableInfoTitle } from '@/widgets/TableInfoTitle';
import { TitleCrew } from '@/widgets/TitleCrew';
import styles from './styles.module.scss';

interface DesktopProps {
	id: number;
}

export const Desktop = ({ id }: DesktopProps) => {
	return (
		<div className={styles.desktop}>
			<aside className={styles.sidebar}>
				<BasicMediaSection id={id} />
			</aside>
			<div className={styles.main}>
				<HeaderTitlePage id={id} />
				<div className={styles.infoMain}>
					<TableInfoTitle
						id={id}
						className={styles.tableInfoTitle}
					/>
					<div className={styles.infoSidebar}>
						<TitleCrew id={id} />
					</div>
				</div>
			</div>
		</div>
	);
};
