import { BasicMediaSection } from '@/widgets/BasicMediaSection';
import { HeaderTitlePage } from '@/widgets/HeaderTitlePage';
import { TableInfoTitle } from '@/widgets/TableInfoTitle';
import { TitleCrew } from '@/widgets/TitleCrew';
import styles from './styles.module.scss';
import { HeaderPersonPage } from '@/widgets/HeaderPersonPage/ui';
import { BasicMediaPerson } from '@/widgets/BasicMediaPerson';
import { TableInfoPerson } from '@/widgets/TableInfoPerson';

interface DesktopProps {
	id: number;
}

export const Desktop = ({ id }: DesktopProps) => {
	return (
		<div className={styles.desktop}>
			<aside className={styles.sidebar}>
				<BasicMediaPerson id={id} className={styles.basicMediaPerson} />
			</aside>
			<div className={styles.main}>
				<HeaderPersonPage
					id={id}
					className={styles.headerTitlePage}
				/>
				<div className={styles.infoMain}>
					<TableInfoPerson
						id={id}
						className={styles.tableInfoTitle}
					/>
					<div className={styles.infoSidebar}>
						{/* <TitleCrew id={id} /> */}
					</div>
				</div>
			</div>
		</div>
	);
};
