import { BasicMediaSection } from '@/widgets/BasicMediaSection';
import { HeaderTitle } from '@/widgets/HeaderTitle';
import { TableInfoTitle } from '@/widgets/TableInfoTitle';
import { TitleCrew } from '@/widgets/TitleCrew';
import styles from './styles.module.scss';

interface DesktopProps {
	id: number;
}

export const Desktop = ({ id }: DesktopProps) => {
	return (
		<div className={styles.desktop}>
			<BasicMediaSection
				id={id}
				className={styles.sidebar}
			/>
			<div className={styles.main}>
				<HeaderTitle id={id} />
				<div className={styles.infoMain}>
					<TableInfoTitle id={id} className={styles.tableInfoTitle} />
					<div className={styles.infoSidebar}>
						<TitleCrew id={id} />
					</div>
				</div>
			</div>
		</div>
	);
};
