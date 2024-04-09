'use client';

import { PopoverCard } from '@/entities/PopoverCard';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { Person } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { MyImage } from '@/shared/ui/MyImage';
import Link from 'next/link';
import { useState } from 'react';
import { useModel } from '../../model/useModel';
import { AdditionalInfoList, LinkItemProps } from '../../types';
import { LinkItemEntity } from '../LinkItemEntity';
import styles from './styles.module.scss';

export interface PersonLoaded
	extends Pick<
		Person,
		'name' | 'enName' | 'profession' | 'photo' | 'movies'
	> {}

interface LinkItemPersonProps extends LinkItemProps {
	data?: PersonLoaded | null;
}

export const LinkItemPerson = ({
	className,
	id,
	name,
	href,
	data,
}: LinkItemPersonProps) => {
	const [person, setPerson] = useState<typeof data>(data);

	const personTitles = person?.movies
		?.filter((movie) => Boolean(movie.rating))
		.sort((a, b) => b.rating! - a.rating!)
		.map((movie) => movie.name)
		.slice(0, 10);

	const additionalInfo: AdditionalInfoList = {
		'Лучшие работы': personTitles as string[],
	};

	const response = async () => {
		const response = await fetch('/api/person', {
			method: 'POST',
			body: JSON.stringify(id),
		});
		const res = await response.json();
		return res;
	};

	const {
		onMouseLeave,
		onMouseEnter,
		top,
		left,
		setPosition,
		isOpen,
		isLoading,
	} = useModel(person, setPerson, response);

	// короче, здесь можно провести некоторые махинации по оптимизации, но я не знаю, насколько это нужно здесь
	// можно PopoverCard обернуть в memo, а также ноды, которые мы в нее передаем. Тогда при переключении isHover
	// не будет лишний раз ререндерится карточка с доп инфой. Но не знаю, насколько это вообще нужно
	return (
		name && (
			<>
				<LinkItemEntity
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					setPosition={setPosition}
					className={className}
					name={name}
					href={href}
				/>
				{isOpen && (
					<PopoverCard
						onMouseLeave={onMouseLeave}
						onMouseEnter={onMouseEnter}
						style={{ top, left }}
						image={
							<MyImage
								src={person?.photo}
								alt={person?.name || person?.enName}
								width={112}
								height={168}
							/>
						}
						featureBtns={
							<Button
								component={Link}
								href={'#'}
								theme='useFeature'
								className={styles.subscribeBtn}>
								<Icon
									name='subscribe'
									className={styles.subscribeIcon}
								/>
								Подписаться
							</Button>
						}
						titleName={person?.name}
						subtitle={stringWithDelimiter(
							', ',
							person?.profession
								?.filter(Boolean)
								.map((prof) => prof.value)
								.slice(0, 3)
						)}
						additionalInfo={additionalInfo}
						isLoading={isLoading}
					/>
				)}
			</>
		)
	);
};
