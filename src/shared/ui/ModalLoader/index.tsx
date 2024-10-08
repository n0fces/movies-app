import { clsx } from 'clsx';

import { Spinner } from '../Spinner';
import styles from './styles.module.scss';

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
