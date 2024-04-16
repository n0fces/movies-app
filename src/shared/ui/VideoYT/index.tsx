'use client';

import { Video } from '@/shared/types';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useCallback, useRef } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { generateURL } from './lib/generateURL';
import { parseMediaURL } from './lib/parseMediaURL';
import styles from './styles.module.scss';

interface VideoProps extends Video {
	withBtn?: boolean;
	isWatchable?: boolean;
	className?: string;
}

export const VideoYT = ({
	url,
	name,
	className,
	withBtn,
	isWatchable,
}: VideoProps) => {
	const imageRef = useRef<HTMLImageElement | null>(null);
	const previewRef = useRef<HTMLDivElement | null>(null);
	const videoRef = useRef<HTMLDivElement | null>(null);
	const id = parseMediaURL(url);
	const iframe = document.createElement('iframe');
	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('src', generateURL(id));

	const addIframe = useCallback(() => {
		imageRef.current?.remove();
		previewRef.current?.remove();
		videoRef.current?.appendChild(iframe);
	}, [iframe]);

	return (
		<div
			ref={videoRef}
			onClick={isWatchable ? addIframe : undefined}
			className={clsx(styles.video, 'ibg', className, {
				[styles.withBtn]: withBtn,
			})}>
			<Image
				ref={imageRef}
				src={`https://i.ytimg.com/vi_webp/${id}/sddefault.webp`}
				className={styles.image}
				alt={name ?? ''}
				placeholder='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII='
				fill
				sizes='50vw'
			/>
			<div
				className={styles.previewInfo}
				ref={previewRef}>
				{withBtn && (
					<div className={styles.buttonWrapper}>
						{isWatchable ? (
							<Button
								theme='gradient'
								className={styles.button}
								aria-label={`Смотреть трейлер: ${name}`}>
								<Icon
									name='watch'
									className={styles.icon}
								/>
							</Button>
						) : (
							<div
								className={clsx(
									styles.button,
									styles.btnGradient
								)}>
								<Icon
									name='watch'
									className={styles.icon}
								/>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
