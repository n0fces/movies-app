import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';
import '@/styles/main.scss';
import { clsx } from 'clsx';
import { Open_Sans } from 'next/font/google';
import styles from './styles.module.scss';

const openSans = Open_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isMobile = deviceDetectServer();
	return (
		<html lang='ru'>
			<body
				className={clsx(openSans.className, {
					full: !isMobile,
				})}>
				{children}
				<div
					id='modal-root'
					className={styles.modalRoot}></div>
				<div
					id='popover-root'
					className={styles.popoverRoot}></div>
			</body>
		</html>
	);
}
