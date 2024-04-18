import { clsx } from 'clsx';
import styles from './styles.module.scss';

interface MobilePersonProps {
	className?: string;
}

export const MobilePerson = ({ className }: MobilePersonProps) => {
	return <div className={clsx(styles.mobilePerson, className)}></div>;
};
