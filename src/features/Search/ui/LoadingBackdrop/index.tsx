import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Spinner } from '@/shared/ui/Spinner';

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
