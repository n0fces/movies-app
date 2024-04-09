import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Spinner } from '../Spinner';

interface ModalLoaderProps {
	className?: string;
}

export const ModalLoader = ({ className }: ModalLoaderProps) => {
	return (
		<div className={clsx(styles.modalLoader, className)}>
			<Spinner radius={25} />
		</div>
	);
};
