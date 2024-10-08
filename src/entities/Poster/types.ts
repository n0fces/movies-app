import { CardItemEntity } from '@/shared/types';

// * либо оставить так, либо потом через Pick что-то придумать

export interface PosterProps
	extends Pick<
		CardItemEntity,
		'poster' | 'rating' | 'watchability' | 'ticketsOnSale'
	> {
	widthPoster: number;
	heightPoster: number;
	interactiveBtns?: React.ReactNode;
	className?: string;
	alt: string | null | undefined;
}
