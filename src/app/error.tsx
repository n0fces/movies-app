'use client';

import { Title } from '@/shared/ui/Title';
import { startTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './error.module.scss';
import { Button } from '@/shared/ui/Button';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	// пока это будет общий интерфейс для обработки всех ошибок
	// в будущем создам несколько классов ошибок, которые буду использовать в разных случаях
	// надо отдельно сделать классы для ошибок авторизации, ошибок, связанных с запросами и так далее
	// но интерфейс для отображения этих ошибок будет один и тот же
	// правда дизайн здесь совсем такой себе)
	return (
		<div className={styles.errorRoot}>
			<div className={styles.errorCnt}>
				<div className={styles.subtitle}>Что-то пошло не так...</div>
				<Title
					size='xl'
					className={styles.title}>
					{error.name}
				</Title>
				<div className={styles.message}>{error.message}</div>
				<div className={styles.actions}>
					<Button
						theme='outlineWhite'
						className={styles.btn}
						onClick={() => {
							router.refresh();
							startTransition(reset);
						}}>
						Попробуйте еще раз
					</Button>
					<Button
						theme='outlineWhite'
						className={styles.btn}
						component={Link}
						href='/'>
						Вернуться на главную
					</Button>
				</div>
			</div>
		</div>
	);
}
