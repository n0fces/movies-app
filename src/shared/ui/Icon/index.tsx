import { IconName } from '@/shared/types';
import { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
	name: IconName;
}

export const Icon = ({ name, className, viewBox, ...props }: IconProps) => {
	return (
		<svg
			aria-hidden
			className={className}
			focusable='false'
			{...props}>
			<use xlinkHref={`/sprite.svg#${name}`} />
		</svg>
	);
};
