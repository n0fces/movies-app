import { SVGProps } from 'react';
import clsx from 'clsx';
import { IconName } from '@/shared/types';

interface IconProps
	extends Omit<SVGProps<SVGSVGElement>, 'name' | 'type'> {
	name: IconName;
}

export const Icon = ({ name, className, viewBox,...props }: IconProps) => {
	return (
		<svg
			aria-hidden
			className={clsx('icon', className)}
			focusable='false'
			{...props}>
			<use xlinkHref={`/sprite.svg#${name}`} />
		</svg>
	);
};
