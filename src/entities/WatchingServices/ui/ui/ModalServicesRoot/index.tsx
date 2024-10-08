import styles from './styles.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ServicesList } from '../ServicesList';
import { Watchability } from '@/shared/types';
import { canWatchInKP } from '@/shared/helpers/canWatchInKP';

interface ModalServicesRootProps {
	watchability: Watchability;
	isOpen: boolean;
	closeModal: () => void;
}

const ModalServicesRoot = ({
	watchability,
	isOpen,
	closeModal,
}: ModalServicesRootProps) => {
	const isKP = canWatchInKP(watchability);

	return (
		<Modal
			className={styles.modal}
			closeModal={closeModal}
			isOpen={isOpen}
			aria-labelledby='services'>
			<div className={styles.modalRoot}>
				<div className={styles.modalHeader}>
					<h3 className={styles.modalTitle}>
						{isKP ? 'Где еще посмотреть' : 'Где смотреть'}
					</h3>
					<Button
						theme='primary'
						shape='circle'
						size='size_28'
						onClick={closeModal}
						className={styles.closeBtn}>
						<Icon
							name='close'
							className={styles.closeIcon}
						/>
					</Button>
				</div>
				<ServicesList
					isMobile={true}
					watchability={watchability}
				/>
			</div>
		</Modal>
	);
};

export default ModalServicesRoot;
