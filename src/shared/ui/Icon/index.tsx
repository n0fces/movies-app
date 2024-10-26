import { SVGProps } from 'react';

import { IconName } from '@/shared/types';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
	name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
	return (
		<svg {...props} aria-hidden focusable="false">
			<use xlinkHref={`/sprite.svg#${name}`} />
		</svg>
	);
};
