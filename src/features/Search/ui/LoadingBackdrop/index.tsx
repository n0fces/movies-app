import { clsx } from 'clsx';

import { Spinner } from '@/shared/ui/Spinner';

import styles from './styles.module.scss';

interface LoadingBackdropProps {
	className?: string;
}

export const LoadingBackdrop = ({ className }: LoadingBackdropProps) => {
	return (
		<div className={clsx(styles.loadingBackdrop, className)}>
			<Spinner radius={10} />
		</div>
	);
};
