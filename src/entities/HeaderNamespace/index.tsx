import { Title } from '@/shared/ui/Title';
import styles from './styles.module.scss';

interface HeaderNamespaceProps {
	className?: string;
	title?: string | null;
	subtitle?: string | null;
	ageRating?: number | null;
	children: React.ReactNode;
}

export const HeaderNamespace = ({
	className,
	children,
	title,
	subtitle,
	ageRating,
}: HeaderNamespaceProps) => {
	return (
		<div className={className}>
			<div className={styles.headerBlock}>
				{title && <Title size='xl'>{title}</Title>}
				{subtitle && (
					<div className={styles.subtitle}>
						<span>{subtitle}</span>
						<span>{ageRating}+</span>
					</div>
				)}
			</div>
			{children}
		</div>
	);
};
