'use client';

import { Icon } from '@/shared/ui/Icon';
import { useShare } from '../../model';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { clickSwipe } from '../../lib';

interface ButtonsProps {
	isMobile: boolean;
	ariaLabel: string;
	className?: string;
}

export const Buttons = ({ isMobile, ariaLabel, className }: ButtonsProps) => {
	const { leftButtonRef, rightButtonRef, carouselRef } = useShare();

	return (
		<ul
			hidden={isMobile}
			aria-hidden={isMobile}
			aria-label={`Контролы для ${ariaLabel}`}
			className={className}>
			<li>
				<button
					ref={leftButtonRef}
					className={clsx(styles.button, styles.buttonLeft)}
					aria-label='Предыдущий'
					onClick={() => clickSwipe('left', carouselRef)}>
					<Icon
						name='arrow-slider'
						className={styles.icon}
					/>
				</button>
			</li>
			<li>
				<button
					ref={rightButtonRef}
					className={clsx(styles.button, styles.buttonRight)}
					aria-label='Следующий'
					onClick={() => clickSwipe('right', carouselRef)}>
					<Icon
						name='arrow-slider'
						className={styles.icon}
					/>
				</button>
			</li>
		</ul>
	);
};
