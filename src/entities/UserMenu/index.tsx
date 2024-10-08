'use client';

import styles from './styles.module.scss';

interface UserMenuProps {}

export const UserMenu = ({}: UserMenuProps) => {
	return (
		<nav className={styles.userMenu} id="user-menu">
			{/* Потом это будет линка на страницу пользователя */}
			<div className={styles.userName}>Username</div>
			<ul className={styles.list}>
				{/* А здесь будут линки на страницы, относящиеся к пользователю */}
				<li>Оценки</li>
				<li>Избранное</li>
				<li>Персоны</li>
				<li>Выйти</li>
			</ul>
		</nav>
	);
};
