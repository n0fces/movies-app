'use client';

import { clsx } from 'clsx';
import { useSearchParams } from 'next/navigation';

import { TouchModal } from '@/entities/TouchModal';

import { Icon } from '@/shared/ui/Icon';
import { Option } from '@/shared/ui/Select/Option';
import { OptionProps } from '@/shared/ui/Select/types';

import { additionalText } from '../../lib/additionalText';
import { useModel } from '../../model';
import styles from './styles.module.scss';

interface FilterProps {
	className?: string;
	title: string;
	type: string;
	options: OptionProps[];
}

const BtnContent = (title?: string, additionalText?: string) => (
	<>
		<span>{title}</span>
		<div className={styles.showOptions}>
			<span>{additionalText}</span>
			<Icon name="all-lists" className={styles.icon} />
		</div>
	</>
);

export const Filter = ({ className, title, type, options }: FilterProps) => {
	const model = useModel();
	const searchParams = useSearchParams();

	return (
		<TouchModal
			theme="modal"
			className={clsx(styles.button, className)}
			btnContent={BtnContent(
				title,
				additionalText(
					type,
					options,
					`Все ${title.toLowerCase()}`,
					searchParams,
				),
			)}
			title={title}>
			<ul className={styles.list}>
				{/* потом при форматировании кода надо уже определиться, используя я индексы для ключей или другие значения */}
				{options.map((option, index) => (
					<Option
						className={styles.option}
						choiceAction={model(type)}
						selectedOptionValue={searchParams.get(type) ?? undefined}
						key={index}
						{...option}
					/>
				))}
			</ul>
		</TouchModal>
	);
};
