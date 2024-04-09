import { CarouselTitleCard } from '@/entities/CarouselTitleCard';
import { Poster } from '@/entities/Poster';
import { getPath } from '@/shared/helpers/getPath';
import { CardItemEntity } from '@/shared/types';

interface CardProps extends CardItemEntity {
	width: number;
	height: number;
}

const PosterNode = ({
	width,
	height,
	name,
	enName,
	alternativeName,
	...propsObj
}: CardProps) => {
	return (
		<Poster
			widthPoster={width}
			heightPoster={height}
			alt={name || enName || alternativeName}
			{...propsObj}
		/>
	);
};

export const Card = (props: CardProps) => {
	const { isSeries, id } = props;
	const href = isSeries ? getPath.series(id) : getPath.movie(id);

	return (
		<CarouselTitleCard
			href={href}
			PosterNode={PosterNode(props)}
			{...props}
		/>
	);
};
