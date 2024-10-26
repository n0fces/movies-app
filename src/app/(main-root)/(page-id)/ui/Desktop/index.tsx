import styles from './styles.module.scss';

interface DesktopProps {
	basicMediaSection?: () => React.ReactElement;
	headerTitle?: () => React.ReactElement;
	tableInfo?: () => React.ReactElement;
	sideContent?: () => React.ReactElement;
}

export const Desktop = ({
	basicMediaSection,
	headerTitle,
	sideContent,
	tableInfo,
}: DesktopProps) => {
	return (
		<div className={styles.rootTop}>
			<aside className={styles.sidebar}>{basicMediaSection?.()}</aside>
			<div className={styles.main}>
				<div className={styles.headerTitlePage}>{headerTitle?.()}</div>
				<div className={styles.infoMain}>
					<div className={styles.tableInfoTitle}>{tableInfo?.()}</div>
					<div className={styles.infoSidebar}>{sideContent?.()}</div>
				</div>
			</div>
		</div>
	);
};
