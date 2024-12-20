'use client';

import { clsx } from 'clsx';
import Link from 'next/link';

import { Navigation } from '@/entities/Navigation';

import { RoutesEnum } from '@/shared/routes';
import { Icon } from '@/shared/ui/Icon';

import { useModel } from '../../model';
import { DropdownHeaderItem } from '../DropdownHeaderItem';
import styles from './styles.module.scss';

interface LogoProps {
	isMobile: boolean;
}

export const LogoHeader = ({ isMobile }: LogoProps) => {
	const { isOpen, setIsOpen, pathname } = useModel(isMobile);

	return (
		<div
			className={clsx(styles.logoContainer, {
				[styles.fullLogoContainer]: !isMobile,
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
			<button
				className={clsx(styles.buttonBurger, {
					[styles.buttonBurgerActive]: isOpen,
					[styles.hasSidebar]: !isMobile && pathname === '/',
				})}
				aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
				aria-expanded={!isOpen ? 'false' : 'true'}
				aria-controls="nav-menu"
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				<span></span>
			</button>
			<DropdownHeaderItem isOpen={isOpen} isMobile={isMobile}>
				<div
					className={clsx({
						[styles.dropdownWrapper]: !isMobile,
					})}>
					<Navigation isOpen={isOpen} />
				</div>
			</DropdownHeaderItem>
			<Link href={RoutesEnum.Home} className={styles.linkMain}>
				<Icon
					name="main-logo"
					className={clsx(styles.logo, {
						[styles.fullLogo]: !isMobile,
					})}
				/>
				<span>KinoStar</span>
			</Link>
		</div>
	);
};
