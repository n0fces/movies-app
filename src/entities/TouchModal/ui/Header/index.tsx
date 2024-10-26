import { clsx } from 'clsx';

import { MyImage } from '@/shared/ui/MyImage';

import { TouchModalProps } from '../../';
import styles from './styles.module.scss';

interface HeaderProps
	extends Pick<
		TouchModalProps,
		'isTitle' | 'poster' | 'title' | 'secondaryTitle'
	> {
	className?: string;
}

export const Header = ({
	poster,
	title,
	secondaryTitle,
	isTitle,
	className,
}: HeaderProps) => {
	return isTitle ? (
		<div className={clsx(styles.header, className)}>
			<MyImage
				src={poster}
				alt={title ?? secondaryTitle}
				className={styles.image}
				width={64}
				height={96}
			/>
			<div className={styles.info}>
				<div className={styles.title} id={`dialog-${title ?? secondaryTitle}`}>
					{title}
				</div>
				<div className={styles.secondaryTitle}>{secondaryTitle}</div>
			</div>
		</div>
	) : (
		<div className={clsx(styles.headerTitle, className)} id={`dialog-${title}`}>
			{title}
		</div>
	);
};
