'use client';

import { Title } from '@/shared/ui/Title';
import { startTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './error.module.scss';
import { Button } from '@/shared/ui/Button';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	return (
		<html>
			<body>
				<div className={styles.errorRoot}>
					<div className={styles.errorCnt}>
						<div className={styles.subtitle}>
							Что-то пошло не так...
						</div>
						<Title
							size='xl'
							className={styles.title}>
							{error.name}
						</Title>
						<div className={styles.message}>{error.message}</div>
						<div className={styles.actions}>
							<Button
								theme='outlineWhite'
								size='size_40'
						shape='rounded'
								onClick={() => {
									router.refresh();
									startTransition(reset);
								}}>
								Попробуйте еще раз
							</Button>
							<Button
								theme='outlineWhite'
								size='size_40'
						shape='rounded'
								component={Link}
								href='/'>
								Вернуться на главную
							</Button>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
