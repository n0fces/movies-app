import Link from 'next/link';

import { useModelReturned } from '../../model/useModel';
import { LinkItemProps } from '../../types';

interface LinkItemEntityProps
	extends Pick<
			useModelReturned,
			'onMouseEnter' | 'onMouseLeave' | 'setPosition'
		>,
		Omit<LinkItemProps, 'id'> {}

// ! скорее всего можно вынести в entity
export const LinkItemEntity = ({
	className,
	onMouseEnter,
	onMouseLeave,
	setPosition,
	name,
	href,
	wordIsLink,
	isMobile = false,
}: LinkItemEntityProps) => {
	return href && wordIsLink ? (
		<Link
			href={href}
			className={className}
			onMouseEnter={
				!isMobile
					? (e) => {
							onMouseEnter();
							setPosition(e);
						}
					: undefined
			}
			onMouseLeave={onMouseLeave}>
			{name}
		</Link>
	) : (
		<span
			className={className}
			onMouseEnter={
				!isMobile
					? (e) => {
							onMouseEnter();
							setPosition(e);
						}
					: undefined
			}
			onMouseLeave={onMouseLeave}>
			{name}
		</span>
	);
};
