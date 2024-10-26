'use client';

import { clsx } from 'clsx';
import { useRef, useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';
import { Icon } from '@/shared/ui/Icon';

import { Option } from './Option';
import styles from './styles.module.scss';
import { SelectProps } from './types';

// ! нужно сделать переключение по стрелочкам, как в настоящем select
const SELECT_HEIGHT = 240;

export const Select = ({
	options,
	value,
	name,
	description,
	position = 'left',
	className,
	action,
}: SelectProps) => {
	const initialValue = value
		? options?.find((option) => value === option.value)?.label
		: options?.[0].label;
	const [selectedOption, setSelectedOption] = useState(initialValue);
	const [isOpen, setIsOpen] = useState(false);
	const [isAbove, setIsAbove] = useState(false);

	const selectRef = useRef<HTMLDivElement | null>(null);
	const headRef = useRef<HTMLDivElement | null>(null);

	const detectAbove = () => {
		const rect = headRef.current?.getBoundingClientRect();
		const bottom = Number(rect?.bottom);
		const windowHeight = window.innerHeight;

		if (SELECT_HEIGHT < windowHeight - bottom) {
			setIsAbove(false);
		} else {
			setIsAbove(true);
		}
	};

	const choiceAction = (value: string, label: string) => {
		setSelectedOption(label);
		setIsOpen(false);

		action?.(value, label);
	};

	return (
		<DropdownWrapper
			setIsOpen={setIsOpen}
			className={clsx(styles.select, className)}
			ref={headRef}>
			<Button
				theme="select"
				size="size_40"
				borderRadius="8"
				maxWidth
				className={styles.selectHead}
				onClick={() => {
					setIsOpen(!isOpen);
					detectAbove();
				}}
				aria-describedby={`select-${name}`}
				aria-expanded={isOpen}
				aria-controls={`select-dropdown-${name}`}
				aria-haspopup="listbox">
				<span className={styles.selectLabel}>{selectedOption}</span>
				<Icon
					name="arrow-select"
					className={clsx(styles.arrowSelect, {
						[styles.arrowOpen]: isOpen,
					})}
				/>
			</Button>
			<span id={`select-${name}`} className="visually-hidden">
				{description}
			</span>
			{isOpen && (
				<DropdownBackdrop
					position={position}
					ref={selectRef}
					className={clsx(styles.selectWrapper, {
						[styles.selectDropdownAbove]: isAbove && isOpen,
						[styles.selectDropdownBelow]: !isAbove && isOpen,
						[styles.selectDropdownHidden]: !isOpen,
					})}>
					<ul
						id={`select-dropdown-${name}`}
						role="listbox"
						className={styles.selectDropdown}>
						{options?.map((option) => {
							return (
								<Option
									key={option.value}
									choiceAction={choiceAction}
									selectedOptionValue={value ?? options[0].value}
									{...option}
								/>
							);
						})}
					</ul>
					<input type="hidden" name={name} value={value} />
				</DropdownBackdrop>
			)}
		</DropdownWrapper>
	);
};
