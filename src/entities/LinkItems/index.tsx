import Link from 'next/link';
import { LinkItem } from '@/shared/types';

interface LinkItemsProps {
	className?: string;
	array?: LinkItem[];
	limitItems?: number;
	moreLink?: string;
}

export const LinkItems = ({
	className,
	array,
	limitItems = 3,
	moreLink,
}: LinkItemsProps) => {
	const length = array?.length;
	array = array?.slice(0, limitItems);

	if (array && array.length > 0) {
		const mappedArr = array.map(({ name, href }, index) => (
			<>
				<Link
					key={index}
					href={href}
					className={className}>
					{name}
				</Link>
				{array?.length && index !== array.length - 1 && ', '}
			</>
		));

		if (moreLink && length && length > limitItems) {
			mappedArr.push(
				<>
					,{' '}
					<Link
						key={limitItems}
						href={moreLink}
						className={className}>
						...
					</Link>
				</>
			);
		}

		return mappedArr;
	} else {
		return null;
	}
};
