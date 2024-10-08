import { clsx } from 'clsx';

import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

import styles from './styles.module.scss';

export default function TitleRoot({ children }: { children: React.ReactNode }) {
	const isMobile = deviceDetectServer();
	return (
		<main className={clsx(styles.main, { [styles.containerFull]: !isMobile })}>
			{children}
		</main>
	);
}
