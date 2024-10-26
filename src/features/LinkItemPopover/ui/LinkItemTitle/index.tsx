'use client';

import { useState } from 'react';

import { PlannedToWatch } from '@/features/PlannedToWatch';
import { TicketsOnSaleBtn } from '@/features/TicketsOnSaleBtn';
import { WatchButton } from '@/features/WatchButton';

import { LinkItems } from '@/entities/LinkItems';
import { PopoverCard } from '@/entities/PopoverCard';
import { Poster } from '@/entities/Poster';

import { canWatchInKP } from '@/shared/helpers/canWatchInKP/canWatchInKP';
import { getPath } from '@/shared/helpers/getPath';
import { sortPersons } from '@/shared/helpers/sortPersons/sortPersons';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter/stringWithDelimiter';
import { CardItemEntity, LinkItem, PersonInMovie } from '@/shared/types';
import { IsLink } from '@/shared/ui/IsLink';

import { useModel } from '../../model/useModel';
import { AdditionalInfoList, LinkItemProps } from '../../types';
import { LinkItemEntity } from '../LinkItemEntity';
import styles from './styles.module.scss';

export type Data = CardItemEntity | null | undefined;

interface LinkItemPersonProps extends LinkItemProps {
	data: Data;
}

export const LinkItemTitle = ({
	className,
	id,
	name,
	href,
	data,
	wordIsLink = true,
	isMobile,
}: LinkItemPersonProps) => {
	const [title, setTitle] = useState<typeof data>(data);

	const stuff = sortPersons(title?.persons);
	const isKP = canWatchInKP(title?.watchability);

	const actorsList: LinkItem[] = stuff.actor
		.filter((actor): actor is PersonInMovie & { name: string; id: string } =>
			Boolean(actor.name && actor.id),
		)
		.map((actor) => ({
			name: actor.name,
			href: getPath.person(actor.id),
		}));

	const directorsList: LinkItem[] = stuff.director
		.filter(
			(director): director is PersonInMovie & { name: string; id: string } =>
				Boolean(director.name && director.id),
		)
		.map((director) => ({
			name: director.name,
			href: getPath.person(director.id),
		}));

	const additionalInfo: AdditionalInfoList = {
		'В главных ролях': actorsList.length ? (
			<LinkItems array={actorsList} />
		) : null,
		Режиссер: directorsList.length ? <LinkItems array={directorsList} /> : null,
	};

	const titleName = title?.name ?? title?.alternativeName ?? title?.enName;

	const TitleName = () => <IsLink href={href}>{titleName}</IsLink>;

	const response = (id: number | null | undefined) => async () => {
		const response = await fetch('/api/title', {
			method: 'POST',
			body: JSON.stringify(id),
		});
		// ! ну такое
		return (await response.json()) as Data;
	};

	const {
		onMouseLeave,
		onMouseEnter,
		top,
		left,
		setPosition,
		isOpen,
		isLoading,
	} = useModel(title, setTitle, response(id));

	const PosterComp = () => (
		<Poster
			widthPoster={112}
			heightPoster={168}
			alt={titleName}
			poster={title?.poster}
			rating={title?.rating}
		/>
	);

	const FeaturesBtns = () => (
		<>
			{title?.ticketsOnSale ? (
				<TicketsOnSaleBtn
					id={id}
					theme="gradient"
					size="size_40"
					shape="rounded"
					className={styles.btn}
				/>
			) : (
				isKP && (
					<WatchButton
						theme="gradient"
						size="size_40"
						shape="rounded"
						className={styles.btn}
					/>
				)
			)}
			<PlannedToWatch
				theme="primary"
				size="size_40"
				shape={title?.ticketsOnSale || isKP ? 'circle' : 'rounded'}
				withoutPadding={title?.ticketsOnSale ?? isKP}
				small={title?.ticketsOnSale ?? isKP}
			/>
		</>
	);

	// короче, здесь можно провести некоторые махинации по оптимизации, но я не знаю, насколько это нужно здесь
	// можно PopoverCard обернуть в memo, а также ноды, которые мы в нее передаем. Тогда при переключении isHover
	// не будет лишний раз ререндерится карточка с доп инфой. Но не знаю, насколько это вообще нужно
	return name ? (
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
					image={PosterComp}
					featureBtns={FeaturesBtns}
					titleName={TitleName}
					subtitle={stringWithDelimiter(', ', [
						title?.alternativeName ?? title?.enName,
						title?.year,
					])}
					additionalInfo={additionalInfo}
					isLoading={isLoading}
				/>
			)}
		</>
	) : null;
};
