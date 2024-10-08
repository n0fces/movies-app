import Link from 'next/link';

import { getPath } from '@/shared/helpers/getPath';
import { Button } from '@/shared/ui/Button';
import { ShapeButton, SizeButton, ThemeButton } from '@/shared/ui/Button/types';
import { Icon } from '@/shared/ui/Icon';

import styles from './styles.module.scss';

interface TicketsOnSaleBtnProps {
	id?: number | null | string;
	shape?: ShapeButton;
	size?: SizeButton;
	theme?: ThemeButton;
	className?: string;
}

export const TicketsOnSaleBtn = ({ id, ...props }: TicketsOnSaleBtnProps) => {
	return (
		<Button component={Link} href={getPath.afisha(id)} {...props}>
			<Icon name="ticket" className={styles.icon} />
			Билеты в кино
		</Button>
	);
};
