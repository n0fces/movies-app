import { useTouchModal } from '@/entities/TouchModal/context';

import { Button } from '@/shared/ui/Button';

import {
	useRating,
	useSettersBase,
	useValue,
	useValueSetter,
} from '../../../context';
import styles from './styles.module.scss';

export const SetRatingButtons = () => {
	const value = useValue();
	const rating = useRating();
	const { setRating } = useSettersBase();
	const setValue = useValueSetter();
	const { closeModal } = useTouchModal();

	return (
		<div className={styles.setRatingButtons}>
			<Button
				theme="primary"
				size="size_48"
				shape="rounded"
				withoutPadding
				maxWidth
				onClick={() => {
					closeModal();
					// * не забывай, что потом надо будет послать запрос на удаление рейтинга у пользователя в бд
					setRating(undefined);
					setValue(undefined);
				}}>
				{rating ? 'Удалить' : 'Отмена'}
			</Button>
			{value && (
				<Button
					theme="gradient"
					shape="rounded"
					size="size_48"
					withoutPadding
					maxWidth
					onClick={() => {
						closeModal();
						// * не забывай, что потом надо будет послать запрос на обновление рейтинга у пользователя в бд
						setRating(value);
					}}>
					Оценить
				</Button>
			)}
		</div>
	);
};
