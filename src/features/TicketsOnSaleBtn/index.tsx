import { getPath } from '@/shared/helpers/getPath';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import Link from 'next/link';
import styles from './styles.module.scss';

interface TicketsOnSaleBtnProps {
	className?: string;
	id?: number | null | string;
}

export const TicketsOnSaleBtn = ({ className, id }: TicketsOnSaleBtnProps) => {
	return (
		<Button
			component={Link}
			theme='gradient'
			className={className}
			href={getPath.afisha(id)}>
			<Icon
				name='ticket'
				className={styles.icon}
			/>
			Билеты в кино
		</Button>
	);
};
