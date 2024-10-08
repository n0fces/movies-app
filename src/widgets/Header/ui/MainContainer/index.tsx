import { Search } from '@/features/Search/ui';

import styles from './styles.module.scss';

interface MainHeaderProps {
	isMobile: boolean;
}

export const MainHeader = ({ isMobile }: MainHeaderProps) => {
	return (
		<div className={styles.mainContainer}>
			<Search isMobile={isMobile} />
		</div>
	);
};
