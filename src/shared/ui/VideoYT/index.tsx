'use client';

import { clsx } from 'clsx';
import { useCallback, useRef } from 'react';

import { generateURL } from '../../helpers/generateURL';
import { parseMediaURL } from '../../helpers/parseMediaURL';
import { Video } from '../../types';
import { PreviewYT } from '../PreviewYT';
import styles from './styles.module.scss';

interface VideoProps extends Video {
	className?: string;
}

export const VideoYT = ({ url, name, className }: VideoProps) => {
	const previewRef = useRef<HTMLDivElement | null>(null);
	const videoRef = useRef<HTMLDivElement | null>(null);

	const id = parseMediaURL(url);
	const iframe = document.createElement('iframe');
	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('src', generateURL(id) ?? '');

	const addIframe = useCallback(() => {
		previewRef.current?.remove();
		videoRef.current?.appendChild(iframe);
	}, [iframe]);

	if (id === null) return null;

	return (
		<div
			role="none"
			ref={videoRef}
			onClick={addIframe}
			className={clsx('ibg', className)}>
			<PreviewYT
				url={url}
				alt={name}
				ref={previewRef}
				withBtn
				className={styles.previewYT}
			/>
		</div>
	);
};
