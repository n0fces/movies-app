import { WatchabilityItem } from '@/shared/types';
import { MyImage } from '@/shared/ui/MyImage';
import Link from 'next/link';
import styles from './styles.module.scss';

interface WatchingServiceProps extends WatchabilityItem {
	className?: string;
	isMobile: boolean;
}

export const WatchingService = ({
	className,
	isMobile,
	logo,
	url,
	name,
}: WatchingServiceProps) => {
	return (
		<li className={className}>
			<Link
				href={url}
				target='_blank'
				className={styles.service}
				rel='noopener noreferrer nofollow'>
				<div className={styles.serviceLogo}>
					<MyImage
						src={logo?.url}
						alt={name}
						width={isMobile ? 42 : 32}
						height={isMobile ? 42 : 32}
					/>
				</div>
				<span className={styles.serviceName}>{name}</span>
			</Link>
		</li>
	);
};
