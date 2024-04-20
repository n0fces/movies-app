import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { MyImage } from '@/shared/ui/MyImage';
import { Title } from '@/shared/ui/Title';

interface BasicSectionMobileProps {
	className?: string;
	title: string | null | undefined;
	poster: string | null | undefined;
	secondaryTitle: string | null | undefined;
	ratingBlock?: () => JSX.Element;
	metaInfo?: Array<string | undefined>;
}

export const BasicSectionMobile = ({
	className,
	title,
	poster,
	secondaryTitle,
	ratingBlock,
	metaInfo,
}: BasicSectionMobileProps) => {
	return (
		<div className={clsx(styles.basicSectionMobile, className)}>
			<MyImage
				alt={title}
				src={poster}
				width={220}
				height={330}
			/>
			<div className={styles.content}>
				<Title
					size='small'
					className={styles.title}>
					{title}
				</Title>
				{ratingBlock && secondaryTitle && (
					<div className={styles.subTitleRoot}>
						{ratingBlock && <span>{ratingBlock?.()}</span>}
						{secondaryTitle && (
							<span className={styles.alternativeName}>
								{secondaryTitle}
							</span>
						)}
					</div>
				)}
				{metaInfo && (
					<div className={styles.titleMetaRoot}>
						{metaInfo.map((meta, index) =>
							meta ? <div key={index}>{meta}</div> : null
						)}
					</div>
				)}
			</div>
		</div>
	);
};
