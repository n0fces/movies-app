import { clsx } from 'clsx';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

import styles from './styles.module.scss';
import { LogoHeader } from './ui/LogoContainer';
import { MainHeader } from './ui/MainContainer';
import { UserHeader } from './ui/UserContainer';

export const Header = () => {
	const isMobile = deviceDetectServer();

	return (
		<header
			className={clsx(styles.header, {
				[styles.rootFull]: !isMobile,
			})}>
			<div
				className={clsx('container', styles.gridContainer, {
					[styles.containerFull]: !isMobile,
				})}>
				<LogoHeader isMobile={isMobile} />
				<MainHeader isMobile={isMobile} />
				<UserHeader isMobile={isMobile} />
			</div>
		</header>
	);
};
