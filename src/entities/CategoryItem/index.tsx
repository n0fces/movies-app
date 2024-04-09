import Link from 'next/link';
import styles from './styles.module.scss';
import { MyImage } from '@/shared/ui/MyImage';
import { List } from '@/shared/types';
import { clsx } from 'clsx';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

export interface CategoryItemProps extends List {
	watchStat?: React.ReactNode;
	className?: string;
}

export const CategoryItem = ({
	name,
	moviesCount,
	cover,
	slug,
	watchStat,
}: CategoryItemProps) => {
	const isMobile = deviceDetectServer();
	return (
		<Link
			href={`/lists/titles/${slug}`}
			className={clsx(styles.categoryItem, {
				[styles.categoryItemFull]: !isMobile,
			})}>
			<MyImage
				src={cover.url}
				alt={name}
				width={88}
				height={88}
				className={styles.image}
			/>
			<div
				className={clsx(styles.meta, {
					[styles.metaFull]: !isMobile,
				})}>
				<span
					className={clsx({
						[styles.name]: !isMobile,
					})}>
					{name}
				</span>
				<span className={clsx(styles.filmsCount)}>
					{moviesCount} тайтлов
				</span>
			</div>
			{watchStat && (
				<div className={styles.watchStatContainer}>{watchStat}</div>
			)}
		</Link>
	);
};
