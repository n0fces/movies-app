import { clsx } from 'clsx';

import { useRating, useValue } from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';
import styles from './styles.module.scss';

export const PreviewRating = () => {
	const value = useValue();
	const rating = useRating();

	return (
		<div className={clsx(styles.previewRating, setColorClasses(styles, value))}>
			<span
				className={clsx(styles.previewValue, {
					[styles.reviewPreviewValue]: value || rating,
				})}>
				{value ?? rating ?? 'Поставьте оценку'}
			</span>
		</div>
	);
};
