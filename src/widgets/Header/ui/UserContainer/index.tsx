'use client';

import Link from 'next/link';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { UserMenu } from '@/entities/UserMenu';
import { Icon } from '@/shared/ui/Icon';
import { useModel } from '../../model';
import { DropdownHeaderItem } from '../DropdownHeaderItem';

interface UserHeaderProps {
	isMobile: boolean;
}

export const UserHeader = ({ isMobile }: UserHeaderProps) => {
	const { isOpen, setIsOpen } = useModel(isMobile);

	// * Если пользователь не зашел, то у нас не будет такого выпадающего меню с настройками, у нас будет кнопки войти и все

	return (
		<div className={styles.userContainer}>
			{!isMobile && (
				<Link href='#'>
					<span className='visually-hidden'>Избранное</span>
					<Icon
						name='bookmarked'
						className={styles.bookmarked}
					/>
				</Link>
			)}
			<div
				className={clsx(styles.buttonMenu, {
					[styles.computer]: !isMobile,
				})}
				onMouseEnter={isMobile ? undefined : () => setIsOpen(true)}
				onMouseLeave={isMobile ? undefined : () => setIsOpen(false)}>
				<button
					className={styles.userAvatar}
					aria-expanded={!isOpen ? 'false' : 'true'}
					aria-controls='user-menu'
					onClick={() => setIsOpen(!isOpen)}></button>
				<DropdownHeaderItem
					isOpen={isOpen}
					isMobile={isMobile}>
					<UserMenu />
				</DropdownHeaderItem>
			</div>
		</div>
	);
};
