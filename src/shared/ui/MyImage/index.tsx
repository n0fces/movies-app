import clsx from 'clsx';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image, { ImageProps } from 'next/image';

import { Icon } from '../Icon';
import styles from './styles.module.scss';

// * потом надо подумать, можно ли сделать это решение более изящно
interface MyImageProps extends Omit<ImageProps, 'src' | 'alt'> {
	src: string | null | undefined | StaticImport;
	alt: string | null | undefined;
	className?: string;
}

export const MyImage = ({
	src,
	alt,
	height,
	width,
	className,
	...props
}: MyImageProps) => {
	return src ? (
		<div
			style={!Boolean(className) ? { width: width, height: height } : undefined}
			className={clsx('animation', className)}>
			<Image
				className={styles.image}
				src={src}
				alt={alt ?? ''}
				width={width}
				height={height}
				{...props}
			/>
		</div>
	) : (
		<div
			style={!Boolean(className) ? { width: width, height: height } : undefined}
			className={clsx(styles.imageCap, className)}>
			<Icon name="main-logo" className={styles.svgCap} />
		</div>
	);
};
