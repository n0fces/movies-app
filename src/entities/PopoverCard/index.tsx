import { HTMLAttributes } from 'react';

import { AdditionalInfoList } from '@/features/LinkItemPopover/types';

import { Popover } from '@/shared/ui/Popover';
import { RectSkeleton } from '@/shared/ui/Skeleton';

import styles from './styles.module.scss';
import { AdditionalInfo } from './ui/AdditionalInfo';

interface PopoverCardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	isLoading?: boolean;
	image?: () => React.ReactElement | null;
	titleName?: () => React.ReactElement | null;
	subtitle?: string | null;
	featureBtns?: () => React.ReactElement | null;
	additionalInfo?: AdditionalInfoList;
}

export const PopoverCard = ({
	className,
	isLoading,
	image,
	titleName,
	subtitle,
	featureBtns,
	additionalInfo,
	...otherProps
}: PopoverCardProps) => {
	return (
		<Popover className={className} {...otherProps}>
			<div className={styles.popoverCard}>
				{isLoading ? (
					<RectSkeleton className={styles.skeleton} />
				) : (
					<>
						<div className={styles.image}>{image?.()}</div>
						<div className={styles.info}>
							<div className={styles.title}>{titleName?.()}</div>
							<div className={styles.subtitle}>{subtitle}</div>
							<div className={styles.features}>{featureBtns?.()}</div>
							{additionalInfo && (
								<div className={styles.additionalInfo}>
									<AdditionalInfo additionalInfo={additionalInfo} />
								</div>
							)}
						</div>
					</>
				)}
			</div>
		</Popover>
	);
};
