import Link from 'next/link';
import { useModelReturned } from '../../model/useModel';
import { LinkItemProps } from '../../types';

interface LinkItemEntityProps
	extends Pick<
			useModelReturned,
			'onMouseEnter' | 'onMouseLeave' | 'setPosition'
		>,
		Omit<LinkItemProps, 'id'> {}

export const LinkItemEntity = ({
	className,
	onMouseEnter,
	onMouseLeave,
	setPosition,
	name,
	href,
	wordIsLink,
}: LinkItemEntityProps) => {
	return href && wordIsLink ? (
		<Link
			href={href}
			className={className}
			onMouseEnter={(e) => {
				onMouseEnter();
				setPosition(e);
			}}
			onMouseLeave={onMouseLeave}>
			{name}
		</Link>
	) : (
		<span
			className={className}
			onMouseEnter={(e) => {
				onMouseEnter();
				setPosition(e);
			}}
			onMouseLeave={onMouseLeave}>
			{name}
		</span>
	);
};
