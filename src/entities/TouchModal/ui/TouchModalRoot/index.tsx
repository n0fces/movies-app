import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Modal } from '@/shared/ui/Modal';

import { TouchModalProps } from '../../';
import { Header } from '../Header';
import styles from './styles.module.scss';

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
				<Header {...otherProps} className={styles.header} />
				<div className={styles.closeBtnContainer}>
					<Button
						theme="primary"
						shape="circle"
						size="size_28"
						onClick={closeModal}>
						<Icon name="close" className={styles.closeIcon} />
					</Button>
				</div>
			</div>
			<div className={styles.contentWrapper}>{children}</div>
		</Modal>
	);
};

export default TouchModalRoot;
