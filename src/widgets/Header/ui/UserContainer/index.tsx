'use client';

import { clsx } from 'clsx';
import Link from 'next/link';

import { UserMenu } from '@/entities/UserMenu';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import { useModel } from '../../model';
import { DropdownHeaderItem } from '../DropdownHeaderItem';
import styles from './styles.module.scss';

interface UserHeaderProps {
	isMobile: boolean;
}

export const UserHeader = ({ isMobile }: UserHeaderProps) => {
	const { isOpen, setIsOpen } = useModel(isMobile);

	// * Если пользователь не зашел, то у нас не будет такого выпадающего меню с настройками, у нас будет кнопки войти и все

	return (
		<div className={styles.userContainer}>
			{!isMobile && (
				<Link href="#">
					<span className="visually-hidden">Избранное</span>
					<Icon name="bookmarked" className={styles.bookmarked} />
				</Link>
			)}
			<div
				className={clsx(styles.buttonMenu, {
					[styles.computer]: !isMobile,
				})}
				onMouseEnter={
					isMobile
						? undefined
						: () => {
								setIsOpen(true);
							}
				}
				onMouseLeave={
					isMobile
						? undefined
						: () => {
								setIsOpen(false);
							}
				}>
				<Button
					size="size_40"
					shape="circle"
					className={styles.userAvatar}
					// Здесь потом будет еще упоминаться имя пользователя
					aria-label="Аватар пользователя"
					aria-expanded={!isOpen ? 'false' : 'true'}
					aria-controls="user-menu"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				/>
				<DropdownHeaderItem isOpen={isOpen} isMobile={isMobile}>
					<UserMenu />
				</DropdownHeaderItem>
			</div>
		</div>
	);
};
