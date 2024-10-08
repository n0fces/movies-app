import { getPath } from '@/shared/helpers/getPath';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import Link from 'next/link';
import styles from './styles.module.scss';
import { ShapeButton, SizeButton, ThemeButton } from '@/shared/ui/Button/types';

interface TicketsOnSaleBtnProps {
	id?: number | null | string;
	shape?: ShapeButton;
	size?: SizeButton;
	theme?: ThemeButton;
	className?: string;
}

export const TicketsOnSaleBtn = ({ id, ...props }: TicketsOnSaleBtnProps) => {
	return (
		<Button
			component={Link}
			href={getPath.afisha(id)}
			{...props}>
			<Icon
				name='ticket'
				className={styles.icon}
			/>
			Билеты в кино
		</Button>
	);
};
