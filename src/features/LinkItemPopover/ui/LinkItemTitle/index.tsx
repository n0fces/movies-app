'use client';

import { LinkItems } from '@/entities/LinkItems';
import { PopoverCard } from '@/entities/PopoverCard';
import { PlannedToWatch } from '@/features/PlannedToWatch';
import { TicketsOnSaleBtn } from '@/features/TicketsOnSaleBtn';
import { WatchButton } from '@/features/WatchButton';
import { canWatchInKP } from '@/shared/helpers/canWatchInKP';
import { getPath } from '@/shared/helpers/getPath';
import { sortPersons } from '@/shared/helpers/sortPersons';
import { stringWithDelimiter } from '@/shared/helpers/stringWithDelimiter';
import { CardItemEntity, LinkItem } from '@/shared/types';
import { MyImage } from '@/shared/ui/MyImage';
import { useState } from 'react';
import { useModel } from '../../model/useModel';
import { AdditionalInfoList, LinkItemProps } from '../../types';
import { LinkItemEntity } from '../LinkItemEntity';
import styles from './styles.module.scss';
import { clsx } from 'clsx';
import { Poster } from '@/entities/Poster';

interface TitleLoaded extends CardItemEntity {}

interface LinkItemPersonProps extends LinkItemProps {
	data?: TitleLoaded | null;
}

export const LinkItemTitle = ({
	className,
	id,
	name,
	href,
	data,
}: LinkItemPersonProps) => {
	const [title, setTitle] = useState<typeof data>(data);

	const stuff = sortPersons(title?.persons);
	const isKP = canWatchInKP(title?.watchability);

	const actorsList: LinkItem[] = stuff.actor
		.filter((actor) => Boolean(actor.name && actor.id))
		.map((actor) => ({
			name: actor.name,
			href: getPath.person(actor.id),
		})) as LinkItem[];

	const directorsList: LinkItem[] = stuff.director
		.filter((director) => Boolean(director.name && director.id))
		.map((director) => ({
			name: director.name,
			href: getPath.person(director.id),
		})) as LinkItem[];

	const additionalInfo: AdditionalInfoList = {
		'В главных ролях': actorsList.length ? (
			<LinkItems array={actorsList} />
		) : null,
		Режиссер: directorsList.length ? (
			<LinkItems array={directorsList} />
		) : null,
	};

	const titleName = title?.name || title?.alternativeName || title?.enName;

	const response = (id: number | null | undefined) => async () => {
		const response = await fetch('/api/title', {
			method: 'POST',
			body: JSON.stringify(id),
		});
		return await response.json();
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
							<Poster
								widthPoster={112}
								heightPoster={168}
								alt={titleName}
								poster={title?.poster}
								rating={title?.rating}
							/>
						}
						featureBtns={
							<>
								{title?.ticketsOnSale ? (
									<TicketsOnSaleBtn
										id={id}
										className={clsx(
											styles.btn,
											styles.btnFull
										)}
									/>
								) : (
									isKP && (
										<WatchButton
											className={clsx(
												styles.btn,
												styles.btnFull
											)}
										/>
									)
								)}
								<PlannedToWatch
									small={title?.ticketsOnSale || isKP}
									className={styles.btn}
								/>
							</>
						}
						titleName={titleName}
						subtitle={stringWithDelimiter(', ', [
							title?.alternativeName || title?.enName,
							title?.year,
						])}
						additionalInfo={additionalInfo}
						isLoading={isLoading}
					/>
				)}
			</>
		)
	);
};
