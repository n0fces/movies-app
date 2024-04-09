import { Button } from '@/shared/ui/Button';
import styles from './styles.module.scss';
import { useSetRating } from '../../../context';
import { useTouchModal } from '@/entities/TouchModal/context';

export const SetRatingButtons = () => {
	const { value, rating, setRating, setValue } = useSetRating();
	const { closeModal } = useTouchModal();

	return (
		<div className={styles.setRatingButtons}>
			<Button
				theme='useFeature'
				className={styles.button}
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
					theme='gradient'
					className={styles.button}
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
