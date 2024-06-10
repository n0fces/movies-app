import { LinkItemTitle } from '@/features/LinkItemPopover/ui/LinkItemTitle';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { CardItemEntity } from '@/shared/types';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { IsLink } from '../../shared/ui/IsLink';
import { deviceDetectServer } from '@/shared/helpers/deviceDetectServer';

// * Здесь надо будет сузить интерфейс (не все штуки, которые поступают, на самом деле здесь нужны)
interface CardItemProps extends CardItemEntity {
	PosterNode: React.ReactNode;
	href?: string;
	className?: string;
	withPopover?: boolean;
}

export const CarouselTitleCard = ({
	PosterNode,
	href,
	className,
	withPopover,
	...otherProps
}: CardItemProps) => {
	const { name, alternativeName, enName, year, genres, id } = otherProps;
	const text = name || alternativeName || enName || null;
	const isMobile = deviceDetectServer();

	return (
		<div className={clsx(styles.card, className)}>
			<IsLink href={href}>
				<div className={styles.poster}>{PosterNode}</div>
			</IsLink>
			<IsLink href={href}>
				<div className={styles.captions}>
					<div className={styles.title}>
						{text ? (
							<LinkItemTitle
								name={text}
								id={id}
								data={otherProps}
								href={href}
								wordIsLink={false}
								className={styles.linkItem}
								isMobile={isMobile}
							/>
						) : null}
					</div>
					<div className={styles.info}>
						{stringWithDelimiter(', ', [year, genres?.[0]?.name])}
					</div>
				</div>
			</IsLink>
		</div>
	);
};
