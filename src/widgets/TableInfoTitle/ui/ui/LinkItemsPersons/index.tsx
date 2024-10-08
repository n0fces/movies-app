import Link from 'next/link';

import { LinkItemPerson } from '@/features/LinkItemPopover/ui/LinkItemPerson';

import { PersonInMovie } from '@/shared/types';

// * Надо обязательно подумать, как объединить в единый компонент LinkItems и LinkItemsPersons. Они практически одинаковы, за исключением работающей ссылки

interface LinkItemsPersonsProps {
	className?: string;
	array?: PersonInMovie[] | null;
	limitItems?: number;
	moreLink?: string;
}

export const LinkItemsPersons = ({
	className,
	array,
	limitItems = 3,
	moreLink,
}: LinkItemsPersonsProps) => {
	const length = array?.length;
	array = array?.slice(0, limitItems);

	if (array && array.length > 0) {
		const mappedArr = array.map(({ name, id, enName }, index) => {
			const text = name || enName;
			if (text && id) {
				return (
					<>
						<LinkItemPerson key={index} name={text} id={id} />
						{array?.length && index !== array.length - 1 && ', '}
					</>
				);
			} else {
				return null;
			}
		});

		if (moreLink && length && length > limitItems) {
			mappedArr.push(
				<>
					, <Link href={moreLink}>...</Link>
				</>,
			);
		}

		return mappedArr;
	} else {
		return null;
	}
};
