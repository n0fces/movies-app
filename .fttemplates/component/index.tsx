import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface <FTName>Props {
	className?: string;
}

export const <FTName> = ({ className }: <FTName>Props) => {
	return (
		<div className={clsx(styles.<FTName | lowercasefirstchar>, className)}>
			
		</div>
	);
};