'use client';

import { ListItemProps } from '@/shared/types';

import { DropdownOptions } from './DropdownOptions';
import { ModalOptions } from './ModalOptions';

interface MoreOptionsProps extends ListItemProps {
	isMobile: boolean;
	className?: string;
}

export const MoreOptions = ({
	isMobile,
	className,
	...otherProps
}: MoreOptionsProps) => {
	return isMobile ? (
		<ModalOptions isMobile={isMobile} className={className} {...otherProps} />
	) : (
		<DropdownOptions className={className} />
	);
};
