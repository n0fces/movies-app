import { clsx } from 'clsx';

import styles from './styles.module.scss';

interface NotFoundProps {
	className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
	return (
		<div className={clsx(styles.notFound, className)}>
			<h2 className={styles.heading}>Ничего не найдено</h2>
			<div className={styles.text}>Попробуйте изменить параметры фильтра</div>
		</div>
	);
};
