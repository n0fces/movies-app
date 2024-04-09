'use client';

import { Icon } from '@/shared/ui/Icon';
import styles from './styles.module.scss';
import { Option } from './Option';
import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Button } from '@/shared/ui/Button';
import { SelectProps } from './types';
import { DropdownBackdrop } from '@/shared/ui/DropdownBackdrop';
import { DropdownWrapper } from '@/shared/ui/DropdownWrapper';

// ! нужно сделать переключение по стрелочкам, как в настоящем select

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
		const height = Number(selectRef.current?.offsetHeight);
		const bottom = Number(rect?.bottom);
		const windowHeight = window.innerHeight;

		height < windowHeight - bottom ? setIsAbove(false) : setIsAbove(true);
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
				className={styles.selectHead}
				onClick={() => {
					setIsOpen(!isOpen);
					detectAbove();
				}}
				aria-describedby={`select-${name}`}
				aria-expanded={isOpen}
				aria-controls={`select-dropdown-${name}`}
				aria-haspopup='listbox'>
				{selectedOption}
				<Icon
					name='arrow-select'
					className={clsx(styles.arrowSelect, {
						[styles.arrowOpen]: isOpen,
					})}
				/>
			</Button>
			<span
				id={`select-${name}`}
				className='visually-hidden'>
				{description}
			</span>
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
					role='listbox'
					className={styles.selectDropdown}>
					{options?.map((option) => {
						return (
							<Option
								key={option.value}
								choiceAction={choiceAction}
								selectedOptionValue={
									value ?? options?.[0].value
								}
								{...option}
							/>
						);
					})}
				</ul>
				<input
					type='hidden'
					name={name}
					value={value}
				/>
			</DropdownBackdrop>
		</DropdownWrapper>
	);
};
