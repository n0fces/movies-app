import { TouchModalProps } from '../../';
import styles from './styles.module.scss';
import { MyImage } from '@/shared/ui/MyImage';

interface HeaderProps
	extends Pick<
		TouchModalProps,
		'isTitle' | 'poster' | 'title' | 'secondaryTitle'
	> {}

export const Header = ({
	poster,
	title,
	secondaryTitle,
	isTitle,
}: HeaderProps) => {
	return isTitle ? (
		<div className={styles.header}>
			<MyImage
				src={poster}
				alt={title || secondaryTitle}
				className={styles.image}
				width={64}
				height={96}
			/>
			<div className={styles.info}>
				<div
					className={styles.title}
					id={`dialog-${title || secondaryTitle}`}>
					{title}
				</div>
				<div className={styles.secondaryTitle}>{secondaryTitle}</div>
			</div>
		</div>
	) : (
		<div
			className={styles.headerTitle}
			id={`dialog-${title}`}>
			{title}
		</div>
	);
};
