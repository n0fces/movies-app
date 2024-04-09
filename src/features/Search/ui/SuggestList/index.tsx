'use client';

import styles from './styles.module.scss';
import Link from 'next/link';
import { SuggestItem } from '../SuggestItem';
import { useInputValue, useIsLoading, useSuggests } from '../../model/context';
import { LoadingBackdrop } from '../LoadingBackdrop';
// import { useModel } from '../../model';

const SuggestList = () => {
	const { isLoading } = useIsLoading();
	const { suggests } = useSuggests();
	const { value } = useInputValue();

	// useModel();

	return (
		<div className={styles.suggestList}>
			{isLoading ? (
				<LoadingBackdrop />
			) : (
				<>
					{suggests.length !== 0 ? (
						<>
							{value === '' ? (
								<div className={styles.title}>
									Входит в топ 10 за месяц
								</div>
							) : (
								suggests.length !== 0 && (
									<div className={styles.title}>
										Возможно, вы искали
									</div>
								)
							)}
							<ul className={styles.list}>
								{suggests.map((suggest) => (
									<SuggestItem
										key={suggest.id}
										{...suggest}
									/>
								))}
							</ul>
							{value !== '' && (
								<Link
									href={'#'}
									className={styles.showAll}>
									Показать все
								</Link>
							)}
						</>
					) : (
						<div className={styles.emptySuggest}>
							По вашему запросу ничего не найдено
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default SuggestList;
