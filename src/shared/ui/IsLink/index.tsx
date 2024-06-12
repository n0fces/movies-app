import Link from 'next/link';

interface IsLinkProps {
	href?: string | null;
	className?: string;
	children: React.ReactNode;
}

export const IsLink = ({ children, href, className }: IsLinkProps) => {
	return href ? (
		<Link
			href={href}
			className={className}>
			{children}
		</Link>
	) : (
		children
	);
};
