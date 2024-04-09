import styles from './styles.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { Header } from '../Header';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { TouchModalProps } from '../../';

export interface TouchModalRootProps extends TouchModalProps {
	isOpen: boolean;
	closeModal: () => void;
}

const TouchModalRoot = ({
	children,
	isOpen,
	closeModal,
	...otherProps
}: TouchModalRootProps) => {
	const { title, secondaryTitle } = otherProps;
	return (
		<Modal
			className={styles.modal}
			closeModal={closeModal}
			isOpen={isOpen}
			aria-labelledby={`dialog-${title || secondaryTitle}`}>
			<div className={styles.headerContainer}>
				{/* надо будет переименовать, чтобы точно понимал, что это хедер модалки */}
				<Header {...otherProps} />
				<div className={styles.closeBtnContainer}>
					<Button
						theme='useFeature'
						onClick={closeModal}
						className={styles.closeBtn}>
						<Icon
							name='close'
							className={styles.closeIcon}
						/>
					</Button>
				</div>
			</div>
			<div className={styles.contentWrapper}>{children}</div>
		</Modal>
	);
};

export default TouchModalRoot;
