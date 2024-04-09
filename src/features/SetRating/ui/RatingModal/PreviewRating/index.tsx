import { clsx } from 'clsx';
import styles from './styles.module.scss';
import { useSetRating } from '../../../context';
import { setColorClasses } from '../../../lib/setColorClasses';

export const PreviewRating = () => {
	const { value, rating } = useSetRating();
	return (
		<div
			className={clsx(
				styles.previewRating,
				setColorClasses(styles, value)
			)}>
			<span
				className={clsx(styles.previewValue, {
					[styles.reviewPreviewValue]: value || rating,
				})}>
				{value ?? rating ?? 'Поставьте оценку'}
			</span>
		</div>
	);
};
