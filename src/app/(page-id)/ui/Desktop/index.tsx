import styles from './styles.module.scss';

interface DesktopProps {
	basicMediaSection?: () => JSX.Element;
	headerTitle?: () => JSX.Element;
	tableInfo?: () => JSX.Element;
	sideContent?: () => JSX.Element;
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
