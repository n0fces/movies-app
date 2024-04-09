'use client';

import { ModalOptions } from './ModalOptions';
import { DropdownOptions } from './DropdownOptions';
import { ListItemProps } from '@/shared/types';

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
		<ModalOptions
			isMobile={isMobile}
			className={className}
			{...otherProps}
		/>
	) : (
		<DropdownOptions className={className} />
	);
};
