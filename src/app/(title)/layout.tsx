import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

export default function TitleRoot({ children }: { children: React.ReactNode }) {
	const isMobile = deviceDetectServer();
	return (
		<main className={clsx(styles.main, { [styles.containerFull]: !isMobile })}>
			{children}
		</main>
	);
}
