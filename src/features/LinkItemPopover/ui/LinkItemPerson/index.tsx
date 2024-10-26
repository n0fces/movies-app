'use client';

import { useState } from 'react';

import { PopoverCard } from '@/entities/PopoverCard';

import { getPath } from '@/shared/helpers/getPath';
import { getProfessions } from '@/shared/helpers/getProfessions';
import { MovieInPerson, Person } from '@/shared/types';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { IsLink } from '@/shared/ui/IsLink';
import { MyImage } from '@/shared/ui/MyImage';

import { useModel } from '../../model/useModel';
import { AdditionalInfoList, LinkItemProps } from '../../types';
import { LinkItemEntity } from '../LinkItemEntity';
import styles from './styles.module.scss';

export type PersonLoaded = Pick<
	Person,
	'name' | 'enName' | 'profession' | 'photo' | 'movies'
>;

interface LinkItemPersonProps extends LinkItemProps {
	data?: PersonLoaded | null;
}

export const LinkItemPerson = ({
	className,
	id,
	name,
	data,
	href: h,
	wordIsLink = true,
	isMobile,
}: LinkItemPersonProps) => {
	const [person, setPerson] = useState<typeof data>(data);

	const personTitles = person?.movies
		?.filter((movie): movie is MovieInPerson & { rating: number } =>
			Boolean(movie.rating),
		)
		.sort((a, b) => b.rating - a.rating)
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
		// ! ну такое
		const res = await response.json() as Person;
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

	const href = h ? h : getPath.person(id);

	const professions = getProfessions(person?.profession);

	// В будущем здесь надо продолжить рефакторинг и подумать над лишними реактовскими ререндерами при изменении isHover. Но приоритетность этого небольшая
	const TitleName = () => <IsLink href={href}>{person?.name}</IsLink>;

	const PosterPerson = () => (
		<IsLink href={href}>
			<MyImage
				src={person?.photo}
				alt={person?.name ?? person?.enName}
				width={112}
				height={168}
			/>
		</IsLink>
	);

	const FeaturesBtns = () => (
		<Button as="link" href={'#'} theme="primary" size="size_40" shape="rounded">
			<Icon name="subscribe" className={styles.subscribeIcon} />
			Подписаться
		</Button>
	);

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
					wordIsLink={wordIsLink}
					isMobile={isMobile}
				/>
				{isOpen && (
					<PopoverCard
						onMouseLeave={onMouseLeave}
						onMouseEnter={onMouseEnter}
						style={{ top, left }}
						image={PosterPerson}
						featureBtns={FeaturesBtns}
						titleName={TitleName}
						subtitle={professions}
						additionalInfo={additionalInfo}
						isLoading={isLoading}
					/>
				)}
			</>
		)
	);
};
