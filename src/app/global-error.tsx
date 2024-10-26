'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

import { Button } from '@/shared/ui/Button';
import { Title } from '@/shared/ui/Title';

import styles from './error.module.scss';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	return (
		<html lang="ru">
			<body>
				<div className={styles.errorRoot}>
					<div className={styles.errorCnt}>
						<div className={styles.subtitle}>Что-то пошло не так...</div>
						<Title size="xl" className={styles.title}>
							{error.name}
						</Title>
						<div className={styles.message}>{error.message}</div>
						<div className={styles.actions}>
							<Button
								theme="outlineWhite"
								size="size_40"
								shape="rounded"
								onClick={() => {
									router.refresh();
									startTransition(reset);
								}}>
								Попробуйте еще раз
							</Button>
							<Button
								theme="outlineWhite"
								size="size_40"
								shape="rounded"
								as={Link}
								href="/">
								Вернуться на главную
							</Button>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
