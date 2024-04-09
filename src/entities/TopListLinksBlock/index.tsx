import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { Title } from '@/shared/ui/Title';
import Link from 'next/link';
import { Icon } from '@/shared/ui/Icon';

interface TopListLinksBlockProps {
	className?: string;
	href?: string;
	text: string;
	list: Array<React.ReactNode>;
	seeMoreLink?: React.ReactNode;
}

export const TopListLinksBlock = ({
	className,
	href,
	text,
	list,
	seeMoreLink,
}: TopListLinksBlockProps) => {
	return (
		<div className={clsx(styles.topListLinksBlock, className)}>
			<Title
				size='small'
				as='h3'
				className={styles.titleBlock}>
				{href ? (
					<Link href={href} className={styles.link}>
						{text}{' '}
						<Icon
							name='arrow-link'
							className={styles.arrowLink}
						/>
					</Link>
				) : (
					text
				)}
			</Title>
			<ul className={styles.list}>
				{list.map((item, index) => (
					<li key={index} className={styles.listItem}>{item}</li>
				))}
			</ul>
			{seeMoreLink && (
				<div className={styles.seeMoreLink}>{seeMoreLink}</div>
			)}
		</div>
	);
};
