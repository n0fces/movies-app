import { clsx } from 'clsx';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

import styles from './styles.module.scss';
import { BottomSections } from './ui/BottomSection';
import { ContentLinks } from './ui/ContentLinks';
import { MobileApps } from './ui/MobileApps';
import { Social } from './ui/Social';

export const Footer = () => {
	const isMobile = deviceDetectServer();
	return (
		<footer
			className={clsx(styles.footer, {
				[styles.mobile]: isMobile,
			})}>
			<Social />
			<ContentLinks />
			{!isMobile && <MobileApps />}
			<BottomSections />
		</footer>
	);
};
