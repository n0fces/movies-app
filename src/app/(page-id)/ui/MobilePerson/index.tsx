import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { BasicMediaPersonMobile } from '@/widgets/BasicMediaPersonMobile';

interface MobilePersonProps {
	className?: string;
	id: number;
}

export const MobilePerson = ({ className, id }: MobilePersonProps) => {
	return (
		<div className={clsx(styles.mobilePerson, className)}>
			<BasicMediaPersonMobile id={id} />
		</div>
	);
};
