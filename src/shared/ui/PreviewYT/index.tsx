import { clsx } from 'clsx';
import Image from 'next/image';
import { forwardRef } from 'react';

import { parseMediaURL } from '../../helpers/parseMediaURL';
import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './styles.module.scss';

interface PreviewYTProps {
	withBtn?: boolean;
	className?: string;
	url?: string | null;
	alt?: string | null;
}

export const PreviewYT = forwardRef<HTMLDivElement, PreviewYTProps>(
	function PreviewYTComp(
		{ className, withBtn, alt, url }: PreviewYTProps,
		ref,
	) {
		const id = parseMediaURL(url);
		return id ? (
			<div
				ref={ref}
				className={clsx('ibg', { [styles.withBtn]: withBtn }, className)}>
				<Image
					src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
					className={styles.image}
					alt={alt ?? ''}
					placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII="
					fill
					sizes="50vw"
				/>
				{withBtn && (
					<div className={styles.previewInfo}>
						<span className={styles.buttonWrapper}>
							<Button
								theme="gradient"
								size="size_60"
								shape="circle"
								className={styles.button}
								aria-label={`Смотреть трейлер: ${alt}`}>
								<Icon name="watch" className={styles.icon} />
							</Button>
						</span>
					</div>
				)}
			</div>
		) : null;
	},
);
